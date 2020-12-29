# D1-Node-CRUD

Aplicação (CRUD) de clientes, utilizando Node.JS, Docker e Banco de dados Postgres.

## Antes de começar
Certifique-se que você:
 - Tenha o Node.js instalado | https://nodejs.org/en/
 - Ambiente docker | https://www.docker.com/

## Começando
1. Clone a aplicação no seu workspace local
2. Execute o comando `npm install` nas pastas `api` e `web`. Dessa forma as dependências necessárias serão instaladas.

## Gerando a aplicação
Execute o comando `docker-compose up --build`. Dessa forma iniciaremos a aplicação criando todas as estruturas de tabelas no banco de dados através de suas migrations.

## Executando a aplicação
Agora que preparamos o ambiente, vamos iniciar a aplicação.

### Camada Web
A camada web utiliza o caminho `http://localhost:8080`

### Camada API
A camada API utiliza o caminho `http://localhost:3000`

#### Recursos da API
Para a definição de recursos foi adotada uma abordagem mais próxima de RESTful.

base path: http://localhost:3000

| Verbo    | Recurso                        | Descrição                  |
|----------|:-------------------------------|:---------------------------|
| `GET`    | `/clientes`                    | Listar clientes            |
| `GET`    | `clientes/:idCliente/telefones`| Visualizar telefones       |
| `GET`    | `clientes/:idCliente/enderecos`| Visualizar Endereços       |
| `GET`    | `clientes/:idCliente/socials`  | Visualizar Redes Sociais   |
| `GET`    | `clientes/:id`                 | Visualizar cliente         |

| Verbo  | Recurso                           | Descrição                 |
|----------|:--------------------------------|:--------------------------|
| `POST`   | `/clientes`                     | Cadastrar cliente         |
| `POST`   | `/clientes/:idCliente/telefones`| Cadastrar Telefones       |
| `POST`   | `/clientes/:idCliente/enderecos`| Cadastrar Endereços       |
| `POST`   | `/clientes/:idCliente/socials`  | Cadastrar Redes Sociais   |

| Verbo    | Recurso                        | Descrição                  |
|----------|:-------------------------------|:---------------------------|
| `DELETE` | `/clientes/:id`                       | Excluir Cliente     |
| `DELETE` | `/clientes/:id/telefones/:idTelefone` | Excluir Telefone    |
| `DELETE` | `/clientes/:id/telefones/:idEndereco` | Excluir Endereço    |
| `DELETE` | `/clientes/:id/telefones/:idSocial`   | Excluir Rede Social |

| Verbo    | Recurso                        | Descrição                  |
|----------|:-------------------------------|:---------------------------|
| `PATCH`  | `/clientes/:id`                | Atualiza Cliente           |
