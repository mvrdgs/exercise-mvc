const categoriesModel = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategoriesList();

  return res.status(200).render('categories', { categories });
};

const getJokeByCategory = async (req, res) => {
  const { category } = req.params;

  const joke = await categoriesModel.getJoke(category);

  return res.status(200).render('joke', { joke });
};

module.exports = {
  listCategories,
};
