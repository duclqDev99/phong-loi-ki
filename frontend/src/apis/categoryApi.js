import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const categoryApi = {
    getList: (params) => {
        return baseGet('categoryRoutes', params);
    },
    create: (formData) => {
        return basePost('categoryRoutes/create', formData);
    },
    update: (categoryId, formData) => {
        return basePut(`categoryRoutes/update/${categoryId}`, formData);
    },
    delete: (categoryId) => {
        return baseDelele(`categoryRoutes/delete/${categoryId}`);
    },
};

export default categoryApi;
