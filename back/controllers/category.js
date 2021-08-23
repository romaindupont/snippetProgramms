const category_model = require('../models/category_model');

const categoryController = {
  add: async (req, res) => {
    try {
      const newSkill = await category_model.dataCategory.addCategory(req.body);
      const newId = newSkill.lastInsertRowid
      const skillJustCreate = await category_model.dataCategory.getOneCategory(newId);
      return res.status(201).json({
        message: "Votre skill est enregistré",
        skillJustCreate
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
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
  },  
  delete: async(req,res) => {
    try {
      await category_model.dataCategory.deleteCategory(req.params.id);
      return res.status(201).json({
        message: "Votre Skill est supprimé"
      });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await category_model.dataCategory.updateCategory(req.body, req.params.id);
      return res.status(201).json({
        message: "Votre skill est mis à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = categoryController;