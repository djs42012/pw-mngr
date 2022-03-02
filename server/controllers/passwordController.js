const db = require  ('../models/passwordModels.js')

const passwordController = {};


passwordController.getPasswords = (req, res, next) => {
    console.log('at getPasswords controller');
    const query = 'SELECT * FROM passwords;';
    const passwords = new Promise((resolve, reject) => {
      const result = db.query(query);
      return resolve(result);
    })
      .then((data) =>{
        console.log(data);
        res.locals.passwrords = data.rows;
        return next();
      })
      .catch((error) => {console.log(error);});
  };



module.exports = passwordController;