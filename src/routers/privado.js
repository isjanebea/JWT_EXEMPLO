const privado = require('../controllers/privado.js');
const auth = require('../controllers/login.js');
const router = require('express').Router();


router.get("/", auth.verifyToken, privado.getAll);

module.exports = router;