const express = require('express');
const bodyParser = require('body-parser');
const clientesController = require('./controller').clientes;
const telefonesController = require('./controller').telefones;
const enderecosController = require('./controller').enderecos;
const socialsController = require('./controller').socials;

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('/clientes', clientesController.list);

app.get('/clientes/:idCliente/telefones', telefonesController.list);

app.get('/clientes/:idCliente/enderecos', enderecosController.list);

app.get('/clientes/:idCliente/socials', socialsController.list);

app.get('/clientes/:id', clientesController.findById);

app.post('/clientes', clientesController.create);

app.post('/clientes/:idCliente/telefones', telefonesController.create);

app.post('/clientes/:idCliente/enderecos', enderecosController.create);

app.post('/clientes/:idCliente/socials', socialsController.create);

app.delete('/clientes/:id', clientesController.delete);

app.delete('/clientes/:id/telefones/:idTelefone', telefonesController.delete);

app.delete('/clientes/:id/enderecos/:idEndereco', enderecosController.delete);

app.delete('/clientes/:id/socials/:idSocial', socialsController.delete);

app.patch('/clientes/:id', clientesController.patch);

app.listen(PORT, () => {
    console.log(`Running api on port ${PORT}`);
});