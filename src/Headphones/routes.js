const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getHeadphones);

module.exports = router;