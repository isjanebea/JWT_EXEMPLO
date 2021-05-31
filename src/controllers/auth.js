
const jwt = require('jsonwebtoken');



const getAll = (req, res) => res.stats(200).send({ mensagem : 'all'})
const createToken = (req, res) => {

    // LEMBRA DE VIRIFICAR DE FAZER A AUTENTICACAO
    const JWTSecret = "asdafwwsdffffssdddsasd";
    const data = {    // propriedades que quero passar na autenticacao
        id : 1,
        user: 'bia',
        email: 'a@emai..com'
    }
    const expires = { expiresIn: '2h'}
    jwt.sign(data, JWTSecret, expires, (err, token) => {
        if (err) res.status(404)
        return res.status(200).send(token)
    })
}



module.exports = {
    getAll,
    createToken
}