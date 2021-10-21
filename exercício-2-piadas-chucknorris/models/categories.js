const axios = require('axios');

const getCategoriesList = async () => {
  const endpoint = 'https://api.chucknorris.io/jokes/categories';
  const { data } = await axios.get(endpoint);
  return data;
};

module.exports = {
  getCategoriesList,
};
