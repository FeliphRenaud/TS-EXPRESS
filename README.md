# Repositório de Projetos com TypeScript e Express

Este repositório contém exemplos de projetos usando TypeScript e Express. O objetivo é fornecer uma base para quem deseja iniciar projetos utilizando essas tecnologias.

## Instalação

Para reproduzir estes projetos, siga as etapas abaixo:

### 1. Inicializando o Projeto

1. Crie uma pasta para o repositório do projeto.
2. Abra a pasta no terminal e execute o seguinte comando para inicializar o `package.json`:

   ```bash
   npm init
   ```

   - Você pode usar `npm init -y` para pular o questionário inicial.

3. Em seguida, inicialize o TypeScript com o comando:

   ```bash
   npx tsc --init
   ```

4. Agora, instale as dependências necessárias:
   ```bash
   npm install @types/express @types/node ts-node-dev typescript --save-dev
   ```

### 2. Instalando o Express

Instale o Express como dependência do projeto:

```bash
npm install express
```

### 3. Configurando o `package.json`

No arquivo `package.json`, edite a seção de scripts para incluir um comando de inicialização para desenvolvimento:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "dev": "ts-node-dev --respawn --transpile-only src/app.ts"
}
```

### 4. Executando o Projeto

Para rodar o projeto com o TypeScript e o Express, execute o seguinte comando no terminal:

```bash
npm run dev
```

Isso inicializa o servidor, converte o código TypeScript para JavaScript e recarrega automaticamente a cada modificação no código.

### 5. Corrigindo Erros de Tipagem do Express

Caso enfrente erros relacionados às tipagens dos parâmetros `req` e `res` ao usar o Express com TypeScript, instale uma versão específica dos tipos do Express:

```bash
npm install @types/express@4.17.13
```

Esse comando corrige problemas de compatibilidade entre o TypeScript e as versões mais recentes do Express.

---

## Tecnologias Utilizadas

- TypeScript
- Express.js
- Node.js

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
