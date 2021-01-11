import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://veerams-dental-efe2f-default-rtdb.firebaseio.com/'
});

export default instance;