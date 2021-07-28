const codes_model = require('../models/codes_model');

const codesController = {
  add: async (req, res) => {
    try {
      const newSkill = await codes_model.dataCodes.addCodes(req.body);
      const newId = newSkill.lastInsertRowid
      const skillJustCreate = await codes_model.dataCodes.getOneCodes(newId);
      return res.status(201).json({
          message: "Votre code est enregistré",
          skillJustCreate
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const codesList = await codes_model.dataCodes.getCodes();
      console.log(codesList)
      return res.status(201).json({
        codesList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },  
  delete: async(req,res) => {
    try {
      await codes_model.dataCodes.deleteCodes(req.params.id);
      return res.status(201).json({
        message: "Votre code est supprimé"
      });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  update: async(req,res) => {
    try {
      await codes_model.dataCodes.updateCodes(req.body, req.params.id);
      return res.status(201).json({
        message: "Votre code est mis à jour"
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = codesController;