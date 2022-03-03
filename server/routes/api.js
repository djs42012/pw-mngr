const express = require('express');
const path = require('path');
const router = express.Router();
const tableController = require(path.resolve(__dirname,'../controllers/tableController.js'));
const passwordController = require(path.resolve(__dirname, '../controllers/passwordController.js'));

router.get('/', tableController.getTables, (req, res) => {
    console.log('at table router');
    return res.status(200).json(res.locals.tables);
});

router.post('/passwords', passwordController.createPassword, (req, res) => {
    console.log ('at create password router');
    return res.status(200).json(res.locals.passwords);
});

router.get('/passwords', passwordController.getPasswords, (rew,res) => {
    console.log('at get passwords router');
    return res.status(200).json(res.locals.passwords);
});

router.delete('/:id', passwordController.deletePassword, (req, res) => {
    console.log('at delete password router');
    return res.status(200).json(res.locals.passwords);
});

router.put('/:id', passwordController.updatePassword, (req, res) => {
    console.log('at update password router');
    return res.status(200).json(res.locals.passwords);
});

router.get('/:id', passwordController.getPassword, (req, res) => {
    console.log('at get password router');
    return res.status(200).json(res.locals.passwords);
});

module.exports = router;