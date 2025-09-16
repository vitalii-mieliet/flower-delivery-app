import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flowerapp-kagj.onrender.com',
});

export default api;
