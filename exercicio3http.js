// importa o modulo http
const moduloHttp = require("http");


// criar servidor

servidor = moduloHttp.createServer ((req, res) => {

    if ( req.method === "POST" && req.url === "/mensagem") {
let body="";

// captura os dados enviados 
// apesar de ser uma araen function pq não abre e fecha ()
req.on("data", chunk => {

    // juntando os dados recebidos

    body += chunk;

})

// ao receber todos dados 

req.on ("end", ()  => {
//definindo mensagem como texto
 res.writeHead (200, {"Content-Type": "Text/plain"});
res.end(`mensagem recebida com sucesso ${body}`);
})
    } else {
        res.writeHead(404, {"Content-Type": "Text/plain"});
        res.end("pagina não encontrada");

    }

})

// ouvidno o servidor
servidor.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
})
