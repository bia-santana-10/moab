// importando o express
const express = require("express");
// iniciando a instancia que vamos chamar de app
// apos essa variavel poderemos criar as rotas

const app = express();


// definindo as rotas

// rota get para raiz do site
app.get("/", (req, res) => {
res.send("bem vindo a pagina principal do site!");
})

// rota get para sobre
app.get ("/sobre", (req, res) => {
    res.sendFile("estamos na pagina sobre ");
})
// rota get para contato
app.get("/contato", (req, res) => {
    res.send("pagina contato!");
})


// definindo a porta que a que estara ouvindo nossa requisição
const port = 3000;
// a partir daqui a porta começa ouvindo as requisiçoes
app.listen(port, () => {
 
    // assim que a porta estiver ouvindo vai confirmar que esta ouvindo atraves da mensagem para o dev
    console.log("servidor rolando na porta 3000");
})


