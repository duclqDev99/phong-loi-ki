import axiosClient from './axiosProductClient';

export const baseGet = (endpoint, params, headers) => {
    return axiosClient.get(endpoint, { params }, { headers });
};

export const basePost = (endpoint, body, headers) => {
    return axiosClient.post(endpoint, body, { headers });
};

export const basePut = (endpoint, body, headers) => {
    return axiosClient.post(endpoint, body, { headers });
};

export const baseDelele = (endpoint, headers) => {
    return axiosClient.delete(endpoint, { headers });
};
