import {baseDelele, baseGet, basePost, basePut} from './baseProductApi';

const header = "Content-Type': 'application/json', Accept: 'application/json',";

const sliderApi = {
    getList: (params) => {
        return baseGet('sliders', params);
    },
    create: (formData) => {
        return basePost('sliders/create', formData, "Content-Type': 'multipart/form-data'");
    },
    delete: (productId) => {
        return baseDelele(`sliders/delete/${productId}`);
    },
};

export default sliderApi;
