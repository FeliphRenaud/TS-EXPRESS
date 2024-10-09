// passo a passo
//1 import do express
import express, { NextFunction, Request, Response } from "express";

//2 agregando as funcionalidades da biblioteca a uma variavel constante
const app = express();

//3 habilitar as rotas para trabalhar com JSON
app.use(express.json());

//3.1 declarar as rotas
//metodo get (get = pegar ou apanhar) responsavel por capturar os dados
app.get("/", (req: Request, res: Response) => {
  return res.send("Bem Vindo ao express");
});
//metodo post (POSTAR) reponsavel por enviar os dados a serem processados pelos clientes
app.post("/api/product", (req: Request, res: Response) => {
  console.log(req.body);

  return res.send("Produto adicionado com sucesso");
});

//ROTA PARA TODOS OS VERBOS
app.all("/api/product/check", (req: Request, res: Response) => {
  //acessando o req.method temos acesso ao verbo HTTP

  if (req.method === "POST") {
    return res.send("O usuario esta inserindo registros via API ");
  } else if (req.method === "GET") {
    return res.send("a API esta lendo os registros inseridos  ");
  } else {
    res.send("operação indisponivel");
  }
});

//4 enviando o JSON

app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "T-shirt",
    price: 30.0,
    color: "Black",
    size: ["P", "M", "G"],
  });
});

//5 Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    const product = {
      id: 1,
      name: "Bone",
      price: 10,
    };

    return res.json(product);
  } else {
    return res.send("Produto não Localizado ");
  }
});

//5.1 Rotas Complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params);

  const productId = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`Acessando a review ${reviewId} do produto ${productId}`);
});

// 6 Router Handler
function getUser(req: Request, res: Response) {
  console.log(`Resgatando o usuario via id: ${req.params.id}`);
  return res.send("O usuario foi localizado");
}

app.get("/api/user/:id", getUser);

//7 middleware

function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    console.log("Pode Seguir");
    next();
  } else {
    return res.send("Acesso Restrito");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem vindo a area administrativa " });
});

//8 req e res generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`Id: ${req.params.id}`);
    console.log(`Name: ${req.params.name}`);

    return res.json({ status: true });
  }
);

//9 tratamento de erros
app.get("/api/error", (req: Request, res: Response) => {
  try {
    // espaço destinado a logica
    throw new Error("PANE NO SISTEMA, alguem me desconfigurou ");
  } catch (e: any) {
    res.status(500).json({ msg: e.message });
  }
});

//5 setar a porta para testes na API (ISOMINIA ou POSTMAN por exemplo)
app.listen(3000, () => {
  console.log("aplicação rodando na porta 3000");
});
