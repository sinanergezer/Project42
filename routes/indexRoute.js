const express = require('express');
const router = express.Router();
const indexGetController = require('../controllers/index');
router.get(
    '/',
      indexGetController
  );
  module.exports = router;