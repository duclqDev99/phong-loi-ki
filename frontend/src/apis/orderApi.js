import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const orderApi = {
    getList: (params) => {
        return baseGet('products', params);
    },
    create: (formData) => {
        return basePost('/sendData', formData);
    },
    update: (productId, formData) => {
        return basePut(`/updateData/${productId}`, formData);
    },
    delete: (productId) => {
        return baseDelele(`/deleteData/${productId}`);
    },
};

export default orderApi;
