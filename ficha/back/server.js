const express = require('express');
const cors = require('cors');
const connection = require('../back/dbconfig');
const app = express();

app.use(cors());
app.use(express.json());

const port = 8339;

app.post('/moradores', (req, res) => {
    const { nome, bloco, apartamento, telefone, email, status } = req.body;
    const query = 'insert into moradores (nome, bloco, apartamento, telefone, email, status) values (?, ?, ?, ?, ?)';
    connection.query(query, [nome, bloco, apartamento, telefone, email, status], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao inserir carro' });
        } res.json({ success: true, message: 'Produto inserido com sucesso!', id: result.insertId });
    })
})

// Listar carros (GET)
app.get('/moradores', (req, res) => {
    connection.query('SELECT * FROM moradores', (err, results) => {
        if (err) res.status(500).json({ error: err.message });
        else res.json(results);
    });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));