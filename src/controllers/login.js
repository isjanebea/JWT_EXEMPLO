
const jwt = require('jsonwebtoken');

// LEMBRA DE VIRIFICAR DE FAZER A AUTENTICACAO
const JWTSecret = "bU8r/lPNLMiXW0rLFwU4a2xKc+qkP780hleqkQ1Y/thXq/tPJumXPxpv2TGXRQ6K7v1E1bDrFjg4Tg082DXZfg=="; // aqui pode ser qualquer valor, lembre-se de usar o process.env.JWTSecret diretamente no jwt.sign no lugar da variavel

const generateToken = (secret, payload) => new Promise((resolve, reject) => {
 
    const options = { 
        expiresIn: '2h', 
    } // aqui acredito que seja options

    jwt.sign(payload, secret, options, (err, token) => {
        if (err) {
            console.log(err.message)
            reject(err)
        } else {
            console.log("token gerada:\n"+token)
            resolve(token)
        }
    })
})


const createToken = async (req, res) => {

    // fazer a autenticacao
    // const { id, user, email } = banco.find...
    const payload = ( Object.keys(req.body).length > 0)? req.body : {    // objeto que quero passar na autenticacao, que pego do BD
        id: 1,
        user: 'bia',
        email: 'janeramerindo@gmail.com'
    }

    console.log('tentando gerar uma token...')
    
    try {
        const token = await generateToken(JWTSecret, payload)
        res.status(200).json({
            token,
            payload
        })
    } catch (error) {
        res.status(500).json({ error: error.mensagem })
    }
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