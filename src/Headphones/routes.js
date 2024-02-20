const { Router } = require('express');
const controller = require('./controller');

const router = Router();

//Get Routes
router.get('/', controller.getHeadPhones);
router.get('/:id', controller.getHeadPhonesById);
router.get('/:brand', controller.getSonyBrandHeadPhones);
router.get('/:wireless', controller.getWirelessHeadPhones);
//router.get('/', controller.getEarBuds);

//Add Routes
router.post('/', controller.addHeadPhones);
router.post('/', controller.addFirstThreeColumns);

//Update Routes
router.put('/', controller.updateHeadPhones);
router.put('/', controller.updateNoiseCancellation);
router.put('/', controller.updateWireless);


module.exports = router;
