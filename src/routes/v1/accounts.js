const express = require('express');

const { dbAction, dbFail, dbSuccess } = require('../../utils/dbHelper');
const { authenticateToken } = require('../../utils/middleware');
const router = express.Router();

// POST / accounts;
// router.post('/', authenticateToken, async (req, res) => {
//   //   // after validation
//   const sql = `INSERT INTO accounts (user_id, group_id) VALUES (?, ?)`;
//   const { user_id, group_id } = req.body;
//   const dbResult = await dbAction(sql, [user_id, group_id]);
//   if (dbResult === false) {
//     return res.status(500).json({ error: 'something went wrong' });
//   }
//   res.json({ msg: 'account added', dbResult });
// });

// router.get('/', authenticateToken, async (req, res) => {
//   const sql = `
//   SELECT accounts.id, accounts.group_id, groups.name
//   FROM accounts
//   INNER JOIN groups
//   ON accounts.group_id = groups.id
//     `;
//   const dbResult = await dbAction(sql, [req.email]);
//   if (dbResult === false) return dbFail(res);
//   dbSuccess(res, dbResult);
// });

module.exports = router;
