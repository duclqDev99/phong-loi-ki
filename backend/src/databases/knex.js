require('dotenv').config();
const config = process.env;
console.log(config.DB_USER)
module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: config.DB_HOST,
            user: config.DB_USER,
            password: config.DB_PASSWORD,
            database: config.DB_DATABASE
        },
        useNullAsDefault: true
    },
};

