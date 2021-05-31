const express = require('express');
const cors = require('cors')

const auth = require('./routers/auth');
const login = require('./routers/login');


const app = express();


app.use(cors());

app.use(express.urlencoded({ extended : false}));

app.use(express.json())


app.use("/auth", auth);
app.use("/login", login);
app.get("/", (req,res) => res.status(200).send({ mensagem  : 'api on'}))



module.exports = app;

