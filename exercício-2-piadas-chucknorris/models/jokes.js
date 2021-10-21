const axios = require('axios');

const getJoke = async (category) => {
  const endpoint = category ? `https://api.chucknorris.io/jokes/random?category=${category}`
    : 'https://api.chucknorris.io/jokes/random'

  const { data: { value } } = await axios.get(endpoint);

  return value;
}

module.exports = {
  getJoke,
}
