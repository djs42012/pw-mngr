const pg = require  ('../models/passwordModels.js')
const tables = require('../../client/constants/tableNames');
const passwordController = {
  newPassword : {
    pwid: 1,
    account: 'serviceName',
    username: 'address@TLD',
    alias: 'alias',
    password: 'password',
    uri: 'uri',
    notes: 'notes',
  },
};


passwordController.createPassword = (req, res, next) => {
    passwordController.newPassword.pwid = Math.floor(Math.random() * 1000);
    let n = passwordController.newPassword;;
    pg.query(
      `INSERT INTO passwords (pwid, account, username, alias, password, uri, notes) VALUES (${n.pwid}, '${n.account}', '${n.username}', '${n.alias}', '${n.password}', '${n.uri}', '${n.notes}') RETURNING *;`
    )
    .then(response => {
        res.locals.passwords = response.rows;
        return next();
      })
    .catch(error => next(error));
  };

passwordController.getPassword = (req, res, next) => {
  pg.query(
    `SELECT * FROM ${tables.primary}`
  )
  .then(response =>{
    res.locals.passwords = response.rows;
    return next();
  })
  .catch(error => next(error));

}





module.exports = passwordController;