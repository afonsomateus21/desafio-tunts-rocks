# Desafio Tunts Rocks
## Projeto para a preenchimento de planilha do Google Sheets, utilizando NodeJS e Express

# 💻 Sobre
Este projeto consiste no preenchimento de dados em uma planilha do Google Sheets, composta por notas de alunos. O sistema deve informar a situação do aluno (aprovado, reprovado, prova final ou reprovado por falta) e a nota que ele precisa tirar, caso esteja na recuperação.


# Instalação
### Pré requisitos
Certifique-se de ter o [Node](https://nodejs.org/en/) e o [Git](https://git-scm.com) instalados, além de um gerenciador
de pacotes como o [Yarn](https://yarnpkg.com/) ou o [NPM](https://www.npmjs.com/).

### 🎨 Execução
```bash
# Clone o repositório
$ git clone <https://github.com/afonsomateus21/desafio-tunts-rocks.git> ou
$ git clone <git@github.com:afonsomateus21/desafio-tunts-rocks.git> se utilizar SSH

# Instale as dependências
$ npm install ou yarn install

# Crie um arquivo .env na raiz do projeto e cole as seguintes variáveis
# SPREADSHEET_ID=1LncVpEGfcDKMQJhM-EQv0Nn30x53wdZntRLyjbtFgQ8
# KEY_FILE=credentials.json
# SCOPES=https://www.googleapis.com/auth/spreadsheets 

# Execute a aplicação em modo de desenvolvimento
$ npm run dev ou yarn dev

# O aplicação ficará disponível na porta:8080 - acesse <http://localhost:8080> em algum client, como o Insomnia, Postman etc. Utilizando o método Post, como mostrado a seguir.
```
<img src="./screenshots/insomnia.png" />

# 🛠 Tecnologias
As seguintes tecnologias foram utilizadas na construção do projeto:

- [NodeJS](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br/)
- [Google Sheet](https://developers.google.com/sheets/api/guides/concepts)

# Autor
Afonso Mateus<br/>
<a href="https://www.linkedin.com/in/afonso-mateus-3a8522118/"><img src="https://img.shields.io/static/v1?label=Linkedin&labelColor=0a66c2&message=Afonso&color=0a66c2&style=flat"/></a>
<img src="https://img.shields.io/static/v1?label=Gmail&labelColor=db4a39&message=afonsomateus.dev@gmail.com&color=db4a39&style=flat"/>


Feito com ❤️ por Afonso Mateus 👋 [Entre em contato!](https://www.linkedin.com/in/afonso-mateus-3a8522118/)