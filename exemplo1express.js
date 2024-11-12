// Importando o módulo express
// O Express é uma biblioteca do Node.js que facilita a criação de servidores web.
// Aqui, estamos importando essa biblioteca para poder usá-la no nosso código.
const express = require("express");

// Criando uma instância do Express
// A instância do express é o que vai permitir que a gente crie o servidor e defina as rotas (os caminhos da nossa aplicação).
// "app" é a nossa aplicação Express.
const app = express();

// Definindo uma rota para o caminho raiz "/"
// As rotas são caminhos que o servidor vai "escutar" para saber o que fazer quando o usuário acessa um determinado endereço.
// A rota "/" é o caminho principal, a página inicial do nosso site.

app.get("/", (req, res) => {


    // Quando o usuário acessar a URL raiz (o servidor vai enviar a resposta "bem vindo!".
    // "req" é o objeto da requisição, que contém informações sobre a solicitação do usuário (como parâmetros, cabeçalhos, etc).
    // "res" é o objeto de resposta, que usamos para enviar uma resposta de volta ao usuário.
    res.send("bem vindo!");
});

// Definindo a porta que o servidor vai escutar
// O servidor precisa de uma porta para poder "ouvir" as requisições. A porta 3000 é uma porta comum em servidores locais.
const port = 3000;

// O servidor começa a "escutar" as requisições na porta definida
app.listen(port, () => {
    // Quando o servidor começar a rodar, ele vai exibir a mensagem no console para o desenvolvedor saber que tudo está funcionando.
    console.log(`Servidor rodando na porta ${port}`);
});