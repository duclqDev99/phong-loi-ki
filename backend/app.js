const knex = require('knex');
const cors = require('cors');
const knexConfig = require('./src/databases/knex');
require('dotenv').config();
const express = require('express');
const app = express();
const db = knex(knexConfig.development);
const routes = require('./src/routes/index');
db.raw('SELECT 1')
    .then(() => {
        console.log('Kết nối đến cơ sở dữ liệu thành công.');
    })
    .catch((err) => {
        console.error('Lỗi khi kết nối đến cơ sở dữ liệu:', err);
    });
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json())
app.use('/api', routes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

