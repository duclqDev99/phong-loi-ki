const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        /*cb(null, path.join(__dirname, '/public/images/products'));*/
        cb(null, path.join(__dirname, '../../../frontend/public/images/products'));
    },
    /*filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },*/
    filename: (req, file, cb) => {
        const originalFileName = file.originalname;
        cb(null, originalFileName);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
