import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
  baseURL: `http://localhost:3001/api/`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    /*'Content-Type': 'multipart/form-data',*/
    'Content-Type': 'application/json',
    /*Accept: 'application/json',*/
  },
});

axiosClient.interceptors.request.use(async (request) => {
  // Add token is here
  const token = Cookies.get('token');
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

axiosClient.interceptors.response.use(
  async (response) => {
    // Handle data is here
    if (response.data) {
      return response.data;
    }

    return response;
  },
  (err) => {
    // Handle authentication is here
    /*const statusCode = err.response.status;
    if (statusCode === 401) {
      localStorage.clear();
      window.location.href = '/admin/login';
    }*/
    throw err;
  },
);

export default axiosClient;
