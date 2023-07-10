const models = require('../models')

function get(req, res) {
    models.books.findAll().then((books) => {
      res.status(200).json(books)
    }).catch(error => {
      res.status(500).json({
        message: "Error while retrieving books",
        error: error
      });
    })
  }
module.exports={
    get:get
}