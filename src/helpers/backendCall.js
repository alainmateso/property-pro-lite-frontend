import axios from 'axios';

export default axios.create({
  baseURL: 'https://property-pro-backend.herokuapp.com/api/v2/',
});
