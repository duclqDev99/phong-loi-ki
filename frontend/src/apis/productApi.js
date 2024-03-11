import {baseDelele, baseGet, basePost, basePut} from './baseProductApi';

const header = "Content-Type': 'application/json', Accept: 'application/json',";

const productApi = {
    getList: (params) => {
        return baseGet('products', params);
    },
    create: (formData) => {
        return basePost('products/create', formData, "Content-Type': 'multipart/form-data'");
    },
    update: (productId, formData) => {
        return basePut(`products/update/${productId}`, formData);
    },
    delete: (productId) => {
        return baseDelele(`products/delete/${productId}`);
    },
    getProduct: (productId) => {
        return baseGet(`products/${productId}`, "");
    },
    getProductsByCate: (categoryId) => {
        return baseGet(`products/filter/${categoryId}`, "");
    },
    searchProduct: (search) => {
        return baseGet(`products/search/${search}`, "");
    },
};

export default productApi;
