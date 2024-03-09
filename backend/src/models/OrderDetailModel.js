const knex = require('knex');
const knexConfig = require('./knex');
const db = knex(knexConfig.development);

const tableName = 'order_detail';

const findByOrderId = (id) => {
    return db(tableName).where('id_order', id).select('*');
};

module.exports = {
    findByOrderId,
};
