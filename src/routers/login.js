const router = require('express').Router();
const auth = require('../controllers/login.js');






router.post("/", auth.createToken)



module.exports = router;