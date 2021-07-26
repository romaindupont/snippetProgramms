const category_model = require('../models/category_model');

const categoryController = {
  /* add: async (req, res) => {
    try {
      const id = await articles_model.dataArticles.lastId();
      const newId = id.max+1;
      const newArticle = await articles_model.dataArticles.addArticles(newId, req.body);
      return res.status(201).json({
          logging: true,
          message: "Votre article est enregistré",
          newArticle
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }, */
  findAll: async (req, res) => {
    try {
      const categoryList = await category_model.dataCategory.getCategory();
      return res.status(201).json({
        categoryList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }/* ,
  delete: async(req,res) => {
    try {
      await articles_model.dataArticles.deleteArticles(req.params.id);
      return res.status(201).json({
        message: "Votre article est supprimé"
      });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await articles_model.dataArticles.updateArticles(req.body, req.params.id);
      return res.status(201).json({
        message: "Votre article est mis à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  } */
};

module.exports = categoryController;