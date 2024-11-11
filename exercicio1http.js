// importando modulo http

const moduloHttp = require("http");

// criando servidor
// o modulo http é um objeto então puxando ele criamos o servidor
// criamos uma aron function com os parametros req de requisitar e res de resposta
const servidor = moduloHttp.createServer ((req, res) => {
    // definindo o tipo de variavel para o cabeçaljho

    res.setHeader("content= type", "text/plain");


    // o servidor verifica as url então vamos verificar se estamos chamando a correta


    // verifica se estamos utilizando o metodo Get e a url é

    if( req.methd === "GET" && req.url === "/") {

        // porta 200 significa que deu certo entao vamos chamar a 200 e colocar a resposta como texto
        res.writeHead (200, {"Content-Type": "Text/plain"});

// aqui vamos colocar a mensagem porem sera mostrada no sistema não ao usuario com console.log
        res.end("Bem vindo");

    } else {
// a porta 404 né a porta de erro onde a url não foi encontrada
        
        res.writeHead (404, {"Content-Type": "Text/plain"});
        res.end("pagina não encontrada");
    
    }
});

// ouvindo a porta 3000
servidor.listen (3000,  () => {
    console.log("servidor rolando na porta 3000");
})

