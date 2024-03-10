const knex = require('knex');
const knexConfig = require('./knex');
const db = knex(knexConfig.development);

const tableName = 'categories';

const findAll = () => {
  return db(tableName).select('*').orderBy('id', 'desc');
};

const findById = (id) => {
  return db(tableName).where('id', id).first();
};

const create = async (category) => {
    const trx = await db.transaction(); 
    try {
        const ids = await trx(tableName).insert(category);
        
        await trx.commit();
        return ids;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const update = async (id, category) => {
    const trx = await db.transaction(); 
    try {
        await trx(tableName).where('id', id).update(category);
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
        await trx(tableName).where('id', id).del();
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
