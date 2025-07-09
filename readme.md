# 🛠️ Manutenção Residencial

Sistema de gerenciamento de serviços de manutenção residencial. Permite que usuários cadastrem, editem, listem e excluam serviços, além de gerenciar autenticação e perfis de usuários.

---

## 📌 Funcionalidades

### 🔐 Autenticação
- Login de usuários.
- Logout de usuários.
- Geração de tokens de acesso (JWT) e refresh tokens.

### 👤 Usuários
- Cadastro de novos usuários.
- Visualização de perfil do usuário autenticado.

### 🧰 Serviços
- Cadastro de serviços de manutenção.
- Edição de serviços existentes.
- Listagem de todos os serviços.
- Consulta de serviços por ID.
- Exclusão de serviços.

---

## 🧪 Tecnologias Utilizadas

- **Node.js** – Plataforma de execução JavaScript no backend.  
- **Express** – Framework web para criação de APIs REST.  
- **Sequelize** – ORM para interação com banco de dados.  
- **PostgreSQL** – Banco de dados relacional.  
- **JWT** – Autenticação baseada em tokens.  
- **bcryptjs** – Hash e verificação de senhas.  
- **dotenv** – Gerenciamento de variáveis de ambiente.

---

## ⚙️ Configuração

### ✔️ Pré-requisitos

- Node.js instalado.  
- PostgreSQL configurado e em execução.

### 📥 Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd nome-do-projeto

2. Instale as dependências:

   ```bash
   npm install

3. Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente:

   ```bash
   DB_DATABASE=<nome_do_banco>
   DB_USER=<usuario_do_banco>
   DB_PASSWORD=<senha_do_banco>
   DB_HOST=<host_do_banco>
   DB_PORT=<porta_do_banco>
   PORT=<porta_do_servidor>
   SECRET_KEY=<chave_secreta_jwt>
   TEMPO_ACESS_TOKEN=<expiração_token_acesso>
   TEMPO_REFRESH_TOKEN=<expiração_refresh_token>

### ▶️ Execução

1. Inicie o servidor:

   ```bash
   npm start

4. O servidor estará disponível na porta definida em PORT no arquivo .env.

📡 Endpoints da API

🔐 Autenticação

POST /api/login – Realiza login.

POST /api/logout – Realiza logout.

POST /api/refresh-token – Gera novo token de acesso.

👤 Usuários

POST /api/cadastrar – Cadastra novo usuário.

GET /api/perfil – Retorna o perfil do usuário autenticado.

🧰 Serviços

POST /api/criar – Cadastra um novo serviço.

PUT /api/editar/:id – Edita um serviço existente.

GET /api/listar – Lista todos os serviços.

GET /api/listar/:id – Lista um serviço por ID.

DELETE /api/deletar/:id – Exclui um serviço.

📄 Licença
Este projeto está licenciado sob a MIT License.
