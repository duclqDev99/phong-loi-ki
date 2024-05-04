const knex = require('knex');
const knexConfig = require('./knex');
const db = knex(knexConfig.development);

const getAllSliders = () => {
    return db('sliders').select('*').orderBy('id', 'desc');
};

const createSlider = async (slider) => {
    const trx = await db.transaction();
    try {
        slider.image = slider.image.originalname;
        const ids = await trx('sliders').insert(slider);
        await trx.commit();
        return ids;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

const deleteSlider = async (id) => {
    const trx = await db.transaction();
    try {
        await trx('sliders').where('id', id).del();
        await trx.commit();
        return id;
    } catch (error) {
        await trx.rollback();
        throw error;
    }
};

module.exports = {
    getAllSliders,
    createSlider,
    deleteSlider,
};
