const app = require('./src/app');
const PORT = process.env.PORT || 3535
app.listen(PORT, () => console.log(`Servidor iniciado NA PORTA ${PORT}`))