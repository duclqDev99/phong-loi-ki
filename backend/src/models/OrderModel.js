const knex = require('knex');
const knexConfig = require('./knex');
const db = knex(knexConfig.development);

const tableName = 'orders';

const findAll = () => {
  return db(tableName).select('*');
};

const findById = (id) => {
  return db(tableName).where('id', id).first();
};

const create = async (order) => {
    const trx = await db.transaction(); 
    try {
        const ids = await db(tableName).insert(order);
        await trx.commit();
        return ids;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const update = async (id, order) => {
    const trx = await db.transaction(); 
    try {
        await db(tableName).where('id', id).update(order);
        await trx.commit();
        return id;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const deleteById = async (id) => {
    const trx = await db.transaction(); 
    try {
        await db(tableName).where('id', id).del();
        await trx.commit();
        return id;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
