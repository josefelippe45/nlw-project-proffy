import axios from 'axios';
//fazendo a conexão com a api node

const api = axios.create({
    baseURL: 'http://10.0.0.103:8080'
})

export default api;