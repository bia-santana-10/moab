//importando modulo http, como se fosse uma biblioteca
const server = require("http");

server.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.writeHead(200);
    res.end("Sucesso");
  }
});

server.listen("3000", () => {
  console.log("criei meu primeiro servidor!", "e vou trabalhar no itau!");
});