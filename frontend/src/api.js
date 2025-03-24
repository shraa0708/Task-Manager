import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
});
axios.defaults.withCredentials = true;
axios.get('http://localhost:5000/api/tasks', { withCredentials: true });


export default api;
