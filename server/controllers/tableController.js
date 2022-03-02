const pg = require  ('../models/passwordModels.js')
const tableController = {};



tableController.getTables = (req, res, next) => {
    console.log('at getTables controller');
    pg.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';"
    ).then(response =>{
        res.locals.tables = response.rows;
        return next();
      })
      .catch((error) => {console.log(error);});
  };



module.exports = tableController;