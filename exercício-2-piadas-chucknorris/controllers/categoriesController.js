const categoriesModel = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await categoriesModel.getCategoriesList();

  return res.status(200).render('categories', { categories });
};

module.exports = {
  listCategories,
};
