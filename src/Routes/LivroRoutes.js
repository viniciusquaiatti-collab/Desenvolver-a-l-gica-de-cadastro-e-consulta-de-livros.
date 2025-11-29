// ROTAS = definem URLs que o usuário pode acessar 

const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/LivroController');

//Rota GET - lista livros 
router.get('/livros', LivroController.listar);

// Rota POST - cria livro 
router.post('/livros', LivroController.criar);

module.exports = router; 