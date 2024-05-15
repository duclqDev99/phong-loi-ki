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
        const check = await db.transaction(async trx => {
            const productQuantities = order.products.map(product => ({
                id: product.id,
                quantity: product.quantity
            }));

            // Kiểm tra số lượng sản phẩm hiện có
            for (const item of productQuantities) {
                const [product] = await trx('products')
                    .select('name', 'quantity')
                    .where('id', item.id)
                    .forUpdate();

                if (!product || product.quantity < item.quantity) {
                    console.log(`Sản phẩm ${product.name} không đủ số lượng. Có sẵn: ${product ? product.quantity : 0}, yêu cầu: ${item.quantity}`);
                    return 0;
                }
            }
            return 1;
        });
        if (check != 1) {
            return check;
        }

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
        return error;
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
