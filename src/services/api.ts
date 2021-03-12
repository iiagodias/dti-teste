import axios from 'axios';

const apiKey = '68b7a486';

const api = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${apiKey}`
});

export default api;