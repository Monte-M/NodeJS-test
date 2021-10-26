const express = require('express');
const { dbAction, dbFail, dbSuccess } = require('../../utils/dbHelper');
const { hashValue, verifyHash } = require('../../utils/hashHelper');
const { validateRegister } = require('../../utils/validateHelper');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');
const { validateLogin } = require('../../utils/validateHelper');

const router = express.Router();

// POST /users/register - create new user,
router.post('/register', validateRegister, async (req, res) => {
  const newUser = {
    full_name: req.body.full_name,
    email: req.body.email,
    password: hashValue(req.body.password),
  };
  const sql = `
  INSERT INTO users (full_name, email, password)
  VALUES ( ?, ?, ? )
  `;
  const dbResult = await dbAction(sql, [
    newUser.full_name,
    newUser.email,
    newUser.password,
  ]);
  if (dbResult === false) {
    return res.status(500).json({ error: 'something went wrong' });
  }
  if (dbResult.affectedRows === 1) {
    return res.json({ msg: 'register success', newUser: newUser.email });
  }
  console.log('no rows affected');
  res.status(500).json({ error: 'something went wrong' });
});

// POST /users/login - log user
router.post('/login', validateLogin, async (req, res) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  const dbResult = await dbAction(sql, [req.body.email]);
  // check if email exsits
  if (dbResult.length !== 1) {
    return dbFail(res, 'email does not exsits', 400);
  }
  // email exists
  // check password
  if (!verifyHash(req.body.password, dbResult[0].password)) {
    return dbFail(res, 'passwords not match');
  }
  // pass match
  const token = jwt.sign({ email: req.body.email }, jwtSecret, {
    expiresIn: '1h',
  });
  const loggedInUser = {
    email: req.body.email,
    token: token,
  };
  res.json({ msg: 'success', loggedInUser, dbResult });
  // create jwt token and send it back
});

module.exports = router;
