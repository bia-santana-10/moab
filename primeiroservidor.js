// importando modulo http

// criar variavel e requisitar modulo

const moduloHttp = require("http");

//criando servidor

//criei variavel e criei uma action function com 2 parametros para requisitar e responder

// prestar atenção que uma action funçao sempre vai ter um () seja com parametro ou não
const servidor = moduloHttp.createServer((resq, res) => {

// devemos declarar um tipo de variavel utilizada e faremos isso no cabeçalho

res.setHeader("Content-Type", "text/plain");

//verificar se está chamando a url correta

if (req.url === "/") {

req.WriteHead(200);

res.end("sucesso na porta 200");
}
else {
res.WriteHead(404);
res.Write("endereço não encontrado");
}
})

//declarando a porta 3000 geralmente utilizado por padrão para comunicaçao url
// criei um action function repare que dessa vez temos () mas sem parametros

servidor.listen(3000, () => {

// aqui utilizaremos console.log para mostrar resultado para usuario mas nem sempre é necessario então utilizamos res.end
console.log("Primeiro servidor criado!");
})


