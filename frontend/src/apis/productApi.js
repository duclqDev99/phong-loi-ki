import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const productApi = {
    getList: (params) => {
        return baseGet('/data', params);
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

export default productApi;
