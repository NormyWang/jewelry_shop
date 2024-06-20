import axios from 'axios';

export default axios.create({
  baseURL: 'http://normyartistry.com:90',
  headers: {
    'Content-type': 'application/json',
  },
});