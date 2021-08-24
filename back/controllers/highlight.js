const highlight_model = require('../models/highlight_model');

const highlightController = {
  add: async (req, res) => {
    try {
      const newhighlight = await highlight_model.datahighlight.addhighlight(req.body);
      return res.status(201).json({
          message: "Votre highlight est enregistré",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const highlightList = await highlight_model.dataHighlight.getHighlight();
      return res.status(201).json({
        highlightList
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },  
  delete: async(req,res) => {
    try {
      await highlight_model.dataHighlight.deleteHighlight(req.params.id);
      return res.status(201).json({
        message: "Votre highlight est supprimé"
      });

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

module.exports = highlightController;