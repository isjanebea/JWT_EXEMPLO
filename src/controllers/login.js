
const jwt = require('jsonwebtoken');

// LEMBRA DE VIRIFICAR DE FAZER A AUTENTICACAO
const JWTSecret = "asdafwwsdffffssdddsasd"; // aqui pode ser qualquer valor, lembre-se de usar o process.env.JWTSecret diretamente no jwt.sign no lugar da variavel


const createToken = (req, res) => {

    // fazer a autenticacao
    // const { id, user, email } = banco.find...
    const user = {    // objeto que quero passar na autenticacao, que pego do BD
        id: 1,
        user: 'bia',
        email: 'a@emai..com'
    }
    const options = { expiresIn: '2h' } // aqui acredito que seja options
    jwt.sign(user, JWTSecret, options, (err, token) => {
        if (err) res.status(404)
        return res.status(200).send({ token, user })
    })
}



const verifyToken = (req, res, next) => {  // isso é um middlware
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ mensagem: 'não autorizado!' })
    
    const token = authorization.split(' ')[1];

    jwt.verify(token, JWTSecret, (err, data) => {
        if (err) return res.status(401).send({mensagem : 'Token Expirada!'});
        req.loggerUser = data; // dados que foi inserido no token
        next(); // aqui chamo a proximo da lista ("rota", middlware, sim pode ter mais de um! vai chamar na ordem dos parametros na router, controller)
    })

}



module.exports = {
    createToken,
    verifyToken
}