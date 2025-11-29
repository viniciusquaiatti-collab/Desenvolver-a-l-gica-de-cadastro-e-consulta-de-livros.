const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json()); // Essencial para ler JSON do body

const livroRoutes = require('./src/Routes/LivroRoutes');
app.use('/', livroRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
