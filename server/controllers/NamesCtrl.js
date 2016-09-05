var Names = require('../models/babyNamesModel');

module.exports = {

  read: function (req, res, next) {
    Names.find(req.query, function (err, result) {
      if ( err ) return res.status( 500 ).send( err )
    let id = req.params;
    res.status( 200 ).json( Names[name] );
    })
  }


};

