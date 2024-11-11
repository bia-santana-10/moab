// importa o modulo http
moduloHttp = require("http");

// criando o servidor
// criando dentro de uma funcao recebendo os parametros req e res
const servidor = moduloHttp.createServer((req, res) => {

    
    
    if ( req.methodo === "DELETE" && req.url === "/apagar") {

        res.writeHead(200, {"Content-Type": "Text/plain"});
        res.end("requisiçãoapagada com sucesso");

    } else {
        res.weiteHead (404, {"Content-Type": "Text/plain"});
        res.end("pagina não encontrada");
    }
})

// ouvindo a porta 3000 
servidor.listen (3000, () => {
    console.log("servidor rolando na porta 3000");
})

