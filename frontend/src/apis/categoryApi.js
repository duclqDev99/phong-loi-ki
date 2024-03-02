import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const categoryApi = {
    getList: (params) => {
        return baseGet('/data', params);
    },
    create: (formData) => {
        return basePost('/sendData', formData);
    },
    update: (categoryId, formData) => {
        return basePut(`/updateData/${categoryId}`, formData);
    },
    delete: (categoryId) => {
        return baseDelele(`/deleteData/${categoryId}`);
    },
};

export default categoryApi;
