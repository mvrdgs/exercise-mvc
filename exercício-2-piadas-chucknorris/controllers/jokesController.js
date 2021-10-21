const jokesModel = require('../models/jokes');

const getJoke = async (req, res) => {
  const { category } = req.params;

  const joke = await jokesModel.getJoke(category);

  return res.status(200).render('joke', { joke });
};

module.exports = {
  getJoke,
};
