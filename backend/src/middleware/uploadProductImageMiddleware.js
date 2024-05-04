const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        /*cb(null, path.join(__dirname, '/public/images/products'));*/
        cb(null, path.join(__dirname, '../../../frontend/public/images/products'));
    },
    filename: (req, file, cb) => {
        if (file) {
            const originalFileName = file.originalname;
            cb(null, originalFileName);
        }
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
