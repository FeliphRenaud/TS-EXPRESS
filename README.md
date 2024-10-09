# TS-EXPRESS

repositório para projetos de TS + EXPRESS

caso voce deseje reproduzir estes projetos tem algumas coisas que voce precisa saber

Inicializando o projeto

apos criar a pasta de repositorio do projeto

voce deve abrir ela em seu terminal
e então digitar seguinte comando

npm init (podendo utilizar tambem o npm init -y para nao precisar responder o questionario inicial de config do projeto)

apos isso voce deve dar o comando
npx tsc --init

e apos isso vem os comandos de instalção de dependencias onde instamos os tipos de expresse e os tipos de node que desejamos para os projetos

npm install
@types/express
@types/node
ts-node-dev
typescript --save-dev
(esse passo a passo garante que as dependencias sejam instaladas de maneira indepente)

apos esse passo a passo
voce deve instalar o EXPRESS

npm install express

assim ele é listado como dependencia e sendo assim para rodar a aplicação depende do express

e por fim criamos um script e damos inicio a aplicação

em package.json na area de scripts

o codigo estara assim

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
}

e voce deve acrescentar uma linha de inicialização

deixandoo desta maneira

"scripts": {

    "test": "echo \"Error: no test specified\" && exit 1",

    "dev": "ts-node-dev --respawn --transpile-only src/app.ts"

}

Desse modo voce consegue:
Inicializar o projeto
Fazer a troca de linguagem TS para JS
E atualizar constantemente o projeto a cada save

apos rodar o projeto teste reparei que havia uma discrepancia entre versoes do express

entao instalei uma versão anterios utilizando o seguinte comando

npm install @types/express@4.17.13

esse passo sanou o erro de interpretação do TS em relação aos parametros REQ e RES das minhas API`S
