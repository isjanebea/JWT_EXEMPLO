const express = require('express');
const cors = require('cors')

const login = require('./routers/login');
const privado = require('./routers/privado')

const app = express();


app.use(cors());

app.use(express.urlencoded({ extended : false}));

app.use(express.json())


app.use("/privado", privado)
app.use("/login", login);
app.get("/", (req,res) => res.status(200).send({ mensagem  : 'api on'}))



module.exports = app;

