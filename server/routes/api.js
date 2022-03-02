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
    console.log(res.locals.passwords);
    return res.status(200).json(res.locals.passwords);
})

module.exports = router;