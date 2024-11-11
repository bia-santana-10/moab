// importa o modulo http
const moduloHttp = require("http");

//criando servidor
const servidor = moduloHttp.createServer((req, res) => {

    // manipulando e verificando o methodo post

    if ( req.method === "POST") {
    
        // aqui dentro vamos manipular toda a requisição post
        // a requisição muitas vezes é enviada em pedaços por isso faremos parte a parte

        let body = "";
        
        // a requisição on quer dizer que esta verificando algo que pode ter entrado e chunk são pedaços binarios de dados
        req.on("data", (chunk) => {

            // como recebemos em pedaços para não perder os dados vamos  trabalhando para juntar cada pedaço

            body+= chunk.toString();
        
        })

        // vamos utilizar o end para verificar se recebemos todos dados

        req.on ("end", () => {

            // mensagem de dados recebidos

            console.log("dados recebidos");

        })

    } else {

        // aqui senão houver nenhuma requisição ele irá pedir

        res.end("aguardando envio de requisição");

    }
})

servidor.listen (3000, () => {
console.log("servidor rolando na porta 3000");


})



