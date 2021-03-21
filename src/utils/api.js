import axios from 'axios';

const api = axios.create({
  baseURL:`${process.env.REACT_APP_API_BASE}`
});

export const get = (searchBy, param) => {
  const finalUrl = `?${searchBy}=${param}&apiKey=${process.env.REACT_APP_API_KEY}`
  return new Promise((resolve, reject) => {
    api
      .get(finalUrl)
      .then(response => resolve(response.data))
      .catch(error => reject(error.response));
  });
};