const jokeModel = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJoke();

  return res.status(200).render('', { joke });
};

module.exports = {
  listJokes,
};
