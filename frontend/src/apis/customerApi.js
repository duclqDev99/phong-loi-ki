import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const customerApi = {
    getList: (params) => {
        return baseGet('/data', params);
    },
    create: (formData) => {
        return basePost('/sendData', formData);
    },
    update: (customerId, formData) => {
        return basePut(`/updateData/${customerId}`, formData);
    },
    delete: (customerId) => {
        return baseDelele(`/deleteData/${customerId}`);
    },
};

export default customerApi;
