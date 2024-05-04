const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadSliderImageMiddleware');
const SliderController = require('../http/controllers/SliderController');

router.get('/', SliderController.getAllSliders);
router.post('/create', upload.single('image'), SliderController.createSlider);
router.post('/upload/image', SliderController.uploadImage);
router.delete('/delete/:id', SliderController.deleteSlider);

module.exports = router;
