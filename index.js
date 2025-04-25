const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Olá, servidor Node.js com Express funcionando!');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
app.get('/info', (req, res) => {
    res.json({ linguagem: 'Node.js', biblioteca: 'Express' });
    });    
const moment = require('moment');
console.log("Data atual:", moment().format('DD/MM/YYYY HH:mm:ss'));
    