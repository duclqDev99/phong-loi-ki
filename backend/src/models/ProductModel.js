const knex = require('knex');
const knexConfig = require('./knex');
const db = knex(knexConfig.development);

const getAllProducts = () => {
  return db('products').select('*');
};

const getProductById = (id) => {
  return db('products').where('id', id).first();    
};

const getProductByUser = (user_id) => {
    return db('products').where('user_id', user_id).select('*');    
  };

  const getProductPuslish = (status) => {
    console.log('sad', db('products').where('status', 1).select('*'));
    return db('products').where('status', status).select('*');    
  };

const filterProductWithCategory = async (category_id) => {
    console.log('category_id', category_id);
    return await db('products')
    .where({ category_id: category_id })
    .select('*');
  };

const createProduct = async (product) => {
    const trx = await db.transaction(); 
    try {
        const ids = await trx('products').insert(product);
        
        await trx.commit();

        return ids;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const updateProduct = async (id, product) => {
    const trx = await db.transaction(); 
    try {
        await trx('products').where('id', id).update(product);
        
        await trx.commit();

        return id;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const deleteProduct = async (id) => {
    const trx = await db.transaction(); 
    try {
        await trx('products').where('id', id).del();
        
        await trx.commit();

        return id;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  filterProductWithCategory,
  getProductByUser,
  getProductPuslish
};
