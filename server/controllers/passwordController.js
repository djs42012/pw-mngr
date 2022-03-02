const db = require  ('../models/passwordModels.js')

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
    const query = `INSERT INTO passwords (pwid, account, username, alias, password, uri, notes) VALUES (${n.pwid}, '${n.account}', '${n.username}', '${n.alias}', '${n.password}', '${n.uri}', '${n.notes}') RETURNING *;`;
    const newPassword = new Promise((resolve, reject) => {
      const result = db.query(query);
      return resolve(result);
    })
      .then((data) =>{
        //console.log(data);
        res.locals.passwords = data.rows;
        return next();
      })
      .catch((error) => {console.log(error);});
  };



module.exports = passwordController;