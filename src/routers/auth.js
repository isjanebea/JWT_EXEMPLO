const router = require('express').Router();
const auth = require('../controllers/auth.js');






router.post("/", auth.createToken)



module.exports = router;