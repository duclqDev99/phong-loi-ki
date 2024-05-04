const SliderModel = require('../../models/SliderModel');
const fileUpload = require("express-fileupload");
/*const { imgNameGen, imgPathGen } = require("./util");*/

const getAllSliders = async (req, res) => {
    try {
        const sliders = await SliderModel.getAllSliders();
        res.json(sliders);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createSlider = async (req, res) => {
    console.log(req.file); // Thông tin file được tải lên
    console.log(req.body); // Các trường dữ liệu khác
    try {
        const image = req.file; // Lấy đường dẫn file
        const sliderData = {
            ...req.body,
            image: image // Thêm đường dẫn file vào dữ liệu sản phẩm
        };
        const id = await SliderModel.createSlider(sliderData);
        res.status(201).json({id});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const uploadImage = async (req, res) => {
    // Checking for 'files' key in request object
    /*if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
    }
    // Holds urls of images uploaded in the server
    const imgURL = [];

    // For single image upload
    const imgName = imgNameGen(req.files["images[]"].name);
    const imgPath = imgPathGen("/upload/images/", imgName);
    imgURL.push(imgName);

    req.files["images[]"].mv(imgPath, (err) => {
        if (err) {
            console.log("err", err);
            return res.status(500).send(err);
        }
    });

    res.status(200).send({ imgURL });*/
    return true;
};

const deleteSlider = async (req, res) => {
    try {
        await SliderModel.deleteSlider(req.params.id);
        res.status(200).send('Product deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    uploadImage,
    getAllSliders,
    createSlider,
    deleteSlider,
};
