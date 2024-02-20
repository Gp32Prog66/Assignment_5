const { Router } = require('express');
const controller = require('./controller');

const router = Router();

//Get Routes
router.get('/', controller.getEarBuds);
router.get('/:id', controller.getEarBudsById);
router.get('/:brand', controller.getSonyBrandEarBuds);
router.get('/:wireless', controller.getWirelessEarBuds);
router.get('/', controller.getEarBuds); //

//Add Routes
router.post('/', controller.addEarBuds);
router.post('/', controller.addFirstThreeColumns);

//Update Routes
router.put('/', controller.updateEarBuds);
router.put('/', controller.updateNoiseCancellation);
router.put('/', controller.updateWireless);


module.exports = router;
