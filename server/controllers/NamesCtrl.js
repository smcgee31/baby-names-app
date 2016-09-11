const Names = require('../models/babyNamesModel');

module.exports = {

  findName: function (req, res, next) {
    let regex = new RegExp(req.params.Name, 'i')
      , query = {Name: regex};
    Names.find(query, function (err, response) {
      if(err) return res.status(500).send(err);
      res.status(200)
      .set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN'
      })
      .send(response);
    });
  },

  read: function (req, res, next) {
    Names.find(req.body, function (err, response) {
      if (err) return res.status(500).send(err);
      return res.status(200).send(response);
    });
  }

};

