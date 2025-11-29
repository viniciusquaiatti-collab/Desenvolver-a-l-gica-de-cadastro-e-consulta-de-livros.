// controllers/LivroController.js
const LivroModel = require('../models/LivroModels');

class LivroController {

    // GET /livros
    static async listar(req, res) {
        try {
            const livros = await LivroModel.listar();
            return res.status(200).json(livros);
        } catch (error) {
            console.error("ERRO NO LISTAR LIVROS:", error);
            return res.status(500).json({ erro: "Erro ao listar livros." });
        }
    }

    // POST /livros
    static async criar(req, res) {
        try {
            // Debug: verifique se os dados estão chegando
            console.log("REQ.BODY:", req.body);

            // Se req.body estiver vazio, retorna erro
            if (!req.body) {
                return res.status(400).json({ erro: "Corpo da requisição vazio." });
            }

            const { titulo, anoPublicacao, quantidadeExemplares, nomeAutor } = req.body;

            // Validação de campos obrigatórios
            if (!titulo || !anoPublicacao || !quantidadeExemplares || !nomeAutor) {
                return res.status(400).json({
                    erro: "Todos os campos são obrigatórios."
                });
            }

            await LivroModel.criar(req.body);

            return res.status(201).json({
                mensagem: "Livro cadastrado com sucesso!"
            });

        } catch (error) {
            console.error("ERRO NO CRIAR LIVRO:", error);
            return res.status(500).json({
                erro: "Erro ao cadastrar livro."
            });
        }
    }
}

module.exports = LivroController;

