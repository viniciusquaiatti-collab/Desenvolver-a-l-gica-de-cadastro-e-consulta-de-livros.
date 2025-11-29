// Arquivo responsável pela conexão com o SQL Server
const dbConfig = {
    user: "sa",
    password: "123456789",
    server: "localhost",
    database: "BibliotecaVini",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

module.exports = dbConfig;

