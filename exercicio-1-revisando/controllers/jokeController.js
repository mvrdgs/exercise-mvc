const jokeModel = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await jokeModel.getJoke();

  console.log(joke);

  return res.status(200).render('jokeView.ejs', { joke });
};

module.exports = {
  listJokes,
};
