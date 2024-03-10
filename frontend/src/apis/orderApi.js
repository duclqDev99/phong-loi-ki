import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const orderApi = {
    getList: (params) => {
        return baseGet('orderRoutes', params);
    },
    getProductsByOrderId: (orderId) => {
        return baseGet(`orderRoutes/detail/${orderId}`);
    },
    create: (formData) => {
        return basePost('orderRoutes/create', formData);
    },
    update: (productId, formData) => {
        return basePost(`orderRoutes/update/${productId}`, formData);
    },
    delete: (productId) => {
        return baseDelele(`orderRoutes/delete/${productId}`);
    },
};

export default orderApi;
