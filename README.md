# Authentication API

Este projeto é uma API de autenticação que utiliza Node.js e TypeScript. Inclui funcionalidades de registro, login, recuperação e reset de senha.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- JWT (JSON Web Tokens)
- Nodemailer para envio de emails
- Mailtrap para simulação de envio de emails

## Configuração Inicial

Antes de iniciar o servidor, é necessário configurar algumas variáveis de ambiente e instalar as dependências necessárias.

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```plaintext
JWT_SECRET=seu_jwt_secreto_aqui
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=seu_usuario_mailtrap
SMTP_PASSWORD=sua_senha_mailtrap


Rotas da API
A API suporta várias rotas para gerenciamento de autenticação e contas de usuários:

Registro
POST /api/auth/register
Body: { "username": "username", "password": "password" }
Registra um novo usuário com um nome de usuário e senha.
Login
POST /api/auth/login
Body: { "username": "username", "password": "password" }
Autentica um usuário e retorna um token JWT.

Recuperação de Senha
POST /api/auth/forgot-password
Body: { "email": "user@example.com" }
Envia um email com um link para resetar a senha.
Reset de Senha
POST /api/auth/reset-password
Body: { "token": "reset_token", "newPassword": "new_password" }
Permite ao usuário resetar a senha usando o token recebido por email.
```
