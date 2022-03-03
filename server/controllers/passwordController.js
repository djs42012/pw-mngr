const pg = require  ('../models/passwordModels.js')
const tables = require('../constants/tableNames');

const passwordController = {};

passwordController.createPassword = (req, res, next) => {
    let n = req.body;
    pg.query(
      `INSERT INTO ${tables.primary} (pwid, account, username, alias, password, uri, notes) VALUES (${n.pwid}, '${n.account}', '${n.username}', '${n.alias}', '${n.password}', '${n.uri}', '${n.notes}') RETURNING *;`
    )
    .then(response => {
        res.locals.passwords = response.rows;
        return next();
      })
    .catch(error => next(error));
};

passwordController.getPasswords = (req, res, next) => {
  pg.query(
    `SELECT * FROM ${tables.primary}`
  )
  .then(response =>{
    res.locals.passwords = response.rows;
    return next();
  })
  .catch(error => next(error));

}

passwordController.deletePassword = (req, res, next) => {
  console.log('at delete password controller')
  pg.query(
    `DELETE FROM ${tables.primary} WHERE pwid = ${req.params.id} RETURNING *;`
    )
  .then(response => {
    res.locals.passwords = response.rows;
    return next();
  })
  .catch(error => next(error));
};

passwordController.updatePassword = (req, res, next) => {
  console.log('at update password controller')
  let n = req.body;
  pg.query(
    `UPDATE ${tables.primary} SET pwid = ${n.pwid}, account = '${n.account}', username = '${n.username}', alias = '${n.alias}', password = '${n.password}', uri = '${n.uri}', notes = '${n.notes}' WHERE pwid = ${req.params.id} RETURNING *;`
    )
  .then(response => {
    res.locals.passwords = response.rows;
    return next();
  })
  .catch(error => next(error));
};

passwordController.getPassword = (req, res, next) => {
  console.log('at get password controller');
  pg.query(
    `SELECT * FROM ${tables.primary} WHERE pwid = ${req.params.id};`
  )
  .then(response =>{
    res.locals.passwords = response.rows;
    return next();
  })
  .catch(error => next(error));
}






module.exports = passwordController;