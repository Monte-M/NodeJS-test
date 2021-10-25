const express = require('express');

const { dbAction, dbFail, dbSuccess } = require('../../utils/dbHelper');
const { authenticateToken } = require('../../utils/middleware');
const router = express.Router();

router.get('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  if (!id) return dbFail(res, 'bad input', 400);
  const sql = `
  SELECT * FROM bills
  WHERE group_id = ?
      `;
  const dbResult = await dbAction(sql, [id], [req.email]);
  if (dbResult === false) return dbFail(res);
  dbSuccess(res, dbResult);
});

router.post('/', authenticateToken, async (req, res) => {
  //   // after validation
  const sql = `INSERT INTO bills (group_id, description, amount) VALUES (?, ?, ?)`;
  const { group_id, description, amount } = req.body;
  const dbResult = await dbAction(sql, [group_id, description, amount]);
  if (dbResult === false) {
    return res.status(500).json({ error: 'something went wrong' });
  }
  res.json({ msg: 'bill added' });
});

module.exports = router;
