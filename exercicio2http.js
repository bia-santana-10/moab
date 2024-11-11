// importando o modulo http

const moduloHttp= require("http");

// criando servidor
// puxamos o metodo createServer para a variavel moduloHttp e criamos uma funcao com os parametro res e req


const servidor = moduloHttp.createServer((req, res) => {

  
    //  verifica se estamos utilizando o metodo get e o endereco da url

    if (req.methd === "GET"&& req.url === "/") {

        // vamos verificar se essa rota foi para porta 200 e declarar as respostas como texto

        res.writeHead (200, {"Content-Type": "Text/plain"} )

        //mensagem ao sistema para porta 200
        res.end("Prta 200 requisitada com sucesso");

    }

// repitir o processo de rota para url /sobre
    
    else if (req.methd === "GET"&& req.url === "/sobre") {

        res.writeHead (200, {"Content-Type": "Text/plain"});
        res.end("url /sobre requisitada com sucesso");

        
    } else {

        res.writeHead (404, {"Content-Type": "Text/plaun"})
        res.end("pagina não encontrada")
    
    } 




})

servidor.listen(3000, () => {

    console.log("conseguiu criar 2 rotas diferentes");

})