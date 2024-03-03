import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const customerApi = {
    getList: (params) => {
        return baseGet('users', params);
    },
    getUserByUsername: (username) => {
        return baseGet(`users/login/${username}`);
    },
    create: (formData) => {
        return basePost('users/create', formData);
    },
    update: (customerId, formData) => {
        return basePut(`users/update/${customerId}`, formData);
    },
    delete: (customerId) => {
        return baseDelele(`users/delete/${customerId}`);
    },
};

export default customerApi;
