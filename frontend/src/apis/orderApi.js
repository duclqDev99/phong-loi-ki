import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const orderApi = {
    getList: (params) => {
        return baseGet('orderRoutes', params);
    },
    create: (formData) => {
        return basePost('orderRoutes/create', formData);
    },
    update: (productId, formData) => {
        return basePut(`orderRoutes/update/${productId}`, formData);
    },
    delete: (productId) => {
        return baseDelele(`orderRoutes/delete/${productId}`);
    },
};

export default orderApi;
