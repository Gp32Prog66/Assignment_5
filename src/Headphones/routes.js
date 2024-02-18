const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getHeadphones);
router.get('/:id', controller.getHeadPhonesById);
router.post('/', controller.addHeadPhones);

module.exports = router;
