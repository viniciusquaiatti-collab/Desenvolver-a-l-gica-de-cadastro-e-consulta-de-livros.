// LivroModels.js
const sql = require('mssql');   // <--- necessário para sql.VarChar, sql.Int
const dbConfig = require('../config/db'); // <--- apenas a config do banco

class LivroModel {
    static async criar(dados) {
        const pool = await sql.connect(dbConfig);

        const query = `
        INSERT INTO Livros (titulo, anoPublicacao, quantidadeExemplares, nomeAutor)
        VALUES (@titulo, @ano, @qtd, @autor)
        `;

        await pool.request()
            .input("titulo", sql.VarChar, dados.titulo)
            .input("ano", sql.Int, dados.anoPublicacao)
            .input("qtd", sql.Int, dados.quantidadeExemplares)
            .input("autor", sql.VarChar, dados.nomeAutor)
            .query(query);
    }
}
