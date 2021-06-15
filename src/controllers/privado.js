
const fakeDados = [
    {
        cpf : '000000',
        nome : 'nome'
    },
    {
        cpf : '000000',
        nome : 'nome'
    }
]

getAll = (req, res) => {
    // dados que vc receberia pelo BD por exemplo
    // req.userLogger -> dados da pessoa autenticada
    res.status(200).json(fakeDados)
}
module.exports = {
    getAll,
}