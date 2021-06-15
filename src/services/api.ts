import axios from 'axios';

const api = axios.create({
  baseURL: "https://smartpsi.tech/" //process.env.REACT_APP_API_URL,
});

export default api;