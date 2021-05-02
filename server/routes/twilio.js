const express = require('express');
const router = express.Router();
const pino = require('express-pino-logger')();
router.use(pino);
const { twilioMessage } = require('../controllers/twilio');

router.post('/messages', twilioMessage);

module.exports = router;