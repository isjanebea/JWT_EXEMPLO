const login = require('../controllers/login.js');
const router = require('express').Router();


router.get("/", login.auth, login.getAll);

module.exports = router;