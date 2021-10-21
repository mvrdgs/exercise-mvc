const axios = require('axios');

const getJoke = async () => {
  const endpoint = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=single';
  const { data: { joke } } = await axios.get(endpoint);
  console.log(joke);
  return joke;
}

module.exports = {
  getJoke,
};
