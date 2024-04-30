const ProductModel = require('../../models/ProductModel');
const fileUpload = require("express-fileupload");
/*const { imgNameGen, imgPathGen } = require("./util");*/

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const filterProductWithCategory = async (req, res) => {
    try {
        const {category_id} = req.params;

        if (!category_id) {
            return res.status(400).send({message: 'Category ID is required'});
        }

        const products = await ProductModel.filterProductWithCategory(category_id);

        return res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return res.status(500).send({message: 'Error fetching products'});
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.getProductById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getProductPuslish = async (req, res) => {
    try {
        console.log('req', req.params);
        const product = await ProductModel.getProductPuslish(req.params.status);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getProductSlider = async (req, res) => {
    try {
        console.log('req', req.params);
        console.log(123);
        const product = await ProductModel.getProductSlider();
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getProductByUser = async (req, res) => {
    try {
        const product = await ProductModel.getProductByUser(req.params.user_id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createProduct = async (req, res) => {
    console.log(req.file); // Thông tin file được tải lên
    console.log(req.body); // Các trường dữ liệu khác
    try {
        const image = req.file; // Lấy đường dẫn file
        const productData = {
            ...req.body,
            image: image // Thêm đường dẫn file vào dữ liệu sản phẩm
        };
        const id = await ProductModel.createProduct(productData);
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

const updateProduct = async (req, res) => {
    try {
        const productData = req.body;
        if (req.file) {
            const image = req.file;
            productData.image = image;
        }

        await ProductModel.updateProduct(req.params.id, productData);
        res.status(200).send('Product updated successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        await ProductModel.deleteProduct(req.params.id);
        res.status(200).send('Product deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const searchProduct = async (req, res) => {
    try {
        const product = await ProductModel.searchProduct(req.params.search);
        if (product) {
            res.json(product);
        } else {
            res.status(404).send('Product not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    uploadImage,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    filterProductWithCategory,
    getProductByUser,
    getProductPuslish,
    getProductSlider,
    searchProduct,
};
