
const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
    const { authorization : authToken } = req.headers;
    console.log(authToken);
    next();
}

getAll = (req, res) => res.status(200).send({ mensagem : 'all'})
module.exports = {
    getAll,
    auth
}