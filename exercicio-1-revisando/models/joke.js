const axios = require('axios');

const getJoke = async () => {
  const endpoint = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';
  const { joke } = await (await axios.get(endpoint)).json();
  return joke;
}

module.exports = {
  getJoke,
};
