# AluraBank

Projeto de exemplo para gerenciamento de negociações financeiras, desenvolvido em TypeScript.
Desenvolvido para fins educacionais no curso de TypeScript da Alura.

## Estrutura

- **app/**: Código principal do frontend em TypeScript (controllers, models, views, decorators, etc).
- **servidor-api/**: API backend simples em Node.js para fornecer dados de negociações.

## Como rodar

1. Instale as dependências do frontend:
   ```sh
   npm install
   ```

2. Compile o projeto TypeScript:
   ```sh
   npm run compile
   ```

3. Inicie o servidor de desenvolvimento e a API simultaneamente:
   ```sh
   npm start
   ```

4. Acesse o frontend em [http://localhost:3000](http://localhost:3000).

## Scripts principais

- `npm run compile`: Compila o TypeScript para JavaScript.
- `npm run server`: Inicia o servidor frontend (lite-server).
- `npm run watch`: Observa alterações e recompila automaticamente.
- `npm start`: Roda o frontend e a API juntos.

## Funcionalidades

- Cadastro de negociações.
- Listagem de negociações.
- Importação de negociações do dia via API.
  
