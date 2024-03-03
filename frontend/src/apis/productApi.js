import {baseDelele, baseGet, basePost, basePut} from './baseApi';

const productApi = {
    getList: (params) => {
        return baseGet('products', params);
    },
    create: (formData) => {
        return basePost('products/create', formData);
    },
    update: (productId, formData) => {
        console.log(formData);
        return basePut(`products/update/${productId}`, formData);
    },
    delete: (productId) => {
        return baseDelele(`products/delete/${productId}`);
    },
    getProduct: (productId) => {
        return baseGet(`products/${productId}`);
    },
    getProductsByCate: (categoryId) => {
        return baseGet(`products/filter/${categoryId}`);
    },
};

export default productApi;
