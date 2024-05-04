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

// const create = async (order) => {
//     const trx = await db.transaction();
//     try {
//         const ids = await db(tableName).insert(order);
//         await trx.commit();
//         return ids;
//     } catch (error) {
//         await trx.rollback();
//         throw error;
//     }
// };

const create = async (order) => {
    try {
        const result = await db.transaction(async trx => {
            const [orderId] = await trx('orders').insert({
                id_user: order.id_user,
                fullname: order.fullname,
                total_amount: order.total_amount,
                address: order.address,
                phone: order.phone,
                email: order.email,
                status: 'processing',
                payment: order.payment
            }, 'id');

            const orderDetails = order.products.map(product => ({
                id_order: orderId,
                id_product: product.id,
                product_name: product.name,
                quantity: product.quantity,
                sub_total: product.subtotal
            }));

            await trx('order_detail').insert(orderDetails);

            return orderId;
        });

        console.log(`Đơn hàng đã được tạo thành công với ID: ${result}`);
    } catch (error) {
        console.error(`Lỗi khi tạo đơn hàng: ${error.message}`);
    }
}

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
