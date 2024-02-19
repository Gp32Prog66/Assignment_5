const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getHeadphones);
router.get('/:brand', controller.getSonyBrandHeadPhones);
router.get('/:wireless', controller.getWirelessHeadPhones);
router.get('/:id', controller.getHeadPhonesById);
router.post('/', controller.addHeadPhones);
router.post('/', controller.addFirstThreeColumns);
router.put('/', controller.updateHeadPhones);
router.put('/', controller.updateNoiseCancellation);
router.put('/', controller.updateWireless);


module.exports = router;
