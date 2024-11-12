// importando o express
const express= require("express");


// criando a instancia do express
const app= express();

// definindo uma porta
// achei bem estranho fujir ao padrao de primeiro definir a poorta depois criar a rota.
// porque no caso da rota dinamica primeiro definimos aporta?

const port = 3000;

// definir a rota dinamica para requisitar dados de um usuario com base no id
// rotas dinamicas sempre irao requisitar dados da url atraves de :

app.get("/usuario/:id", (req, res) =>{

    // acessando atraves do parametro o id do usuario

// aqui temos o req requisitando. params fiquei na duvida de como ele puxa automatico ja que não passei esse parametro
// puxa da bibliotaca?


    const usuarioId= req.params.id;

// buscando um usuario no banco de dados
// sei que é uma simulaçao 

const usuarios= [


    // aqui estamos incluindo a propriedade de um objeto

    { id:1,
        nome:"beatriz",
    },

    {id: 2,
        nome:"moab",

    },

    { id: 3,
        nome:"pedro",

    },
]

// buscando o id do usuario atraves do valors adquirido da url

// aqui entendi que transformamos em inteiro o dado o dado da propiedade mas da onde veio esse u?
// ou esta transformando em inteiro o dado do params quando declaramos a const usuarioId

const usuario = usuarios.find(u => u.id === parseInt(usuarioId));
// verificando se o usuario foi encontrado
// mas aqui apenas dissemos se usuarios, não compreendi direito porqe se oque? nao parece não  ter  uma condicao
if (usuario) {
    // respondendo com os dados do usuario
    // transformado em json para facilitar a interaçao
    res.json(usuario);

} else {

    // caso a busca nao seja encontrada
    // sei que o nome é logico mas .status busca o que/]?

    res.status(404).json({ mensagem: " usuario não encontrado "});

}
})

// Definindo a rota padrão
app.get('/', (req, res) => {
    res.send("Bem-vindo ao sistema de usuários!");
  });
  
  // Iniciando o servidor na porta especificada
  app.listen(port, () => {
    console.log("servidor rolando na porta 3000!");
  });


