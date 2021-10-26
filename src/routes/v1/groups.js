const express = require('express');

const { dbAction, dbFail, dbSuccess } = require('../../utils/dbHelper');
const router = express.Router();

// GET all groups
router.get('/', async (req, res) => {
  const dbResult = await dbAction('SELECT * FROM groups');
  if (dbResult === false) {
    return dbFail(res, 'error getting groups');
  }
  return dbSuccess(res, dbResult);
});

module.exports = router;
