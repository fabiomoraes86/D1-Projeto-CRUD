const express = require('express');

const bodyParser = require('body-parser');

const api = require('./services/api');

const PORT = 8080;

const app = express();

const path = require('path');
const { error } = require('console');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

/* Página index */
app.get('/', (req, res) => {
    api.get('/clientes')
        .then((response) => {
            res.render('index', {
                listaClientes: response.data
            });
        }).catch((error) => res.send(error));
});
app.get('/clientes/:id/deletar', (req, res) => {
    api.delete(`/clientes/${req.params.id}`)
        .then((response) => {
            res.redirect('/');
        }).catch((error) => res.send(error));
})
/* Página cadastro Cliente */
app.get('/cadastrar', (req, res) => {
    res.render('cliente');
})
app.post('/cadastrar', (req, res) => {
    api.post('clientes', req.body)
        .then(() => {
            res.redirect('/');

        }).catch((error) => res.send(error));
});
app.get('/clientes/:id/editar', (req,res) => {
    api.get(`/clientes/${req.params.id}`, req.body)
    .then((response) => {
        res.render('cliente_edit', {
            dadosCliente : response.data
        });
    }).catch((error) => res.send(error));
});
app.post('/clientes/:id/editar', (req,res) => {
    api.patch(`/clientes/${req.params.id}`, req.body)
    .then(() => {
        res.redirect('/');
    }).catch((error) => res.send(error));
});

/* Página telefones*/
app.get('/clientes/:idCliente/telefones', (req, res) => {
    api.get(`/clientes/${req.params.idCliente}/telefones`)
        .then((response) => {
            res.render('telefones', {
                listaTelefones: response.data
            });
        }).catch((error) => res.send(error));
});
app.get('/clientes/:id/telefones/:idTelefone/deletar', (req, res) => {
    api.delete(`/clientes/${req.params.id}/telefones/${req.params.idTelefone}`)
        .then((response) => {
            res.redirect(`/clientes/${req.params.id}/telefones`);
        }).catch((error) => res.send(error));
})
app.post('/clientes/:idCliente/telefones', (req, res) => {
    api.post(`/clientes/${req.params.idCliente}/telefones`, req.body)
        .then(() => {
            res.redirect(`/clientes/${req.params.idCliente}/telefones`);

        }).catch(() => {
            res.send('Erro Telefone.');
        });
});
/* Página endereços */
app.get('/clientes/:idCliente/enderecos', (req, res) => {
    api.get(`/clientes/${req.params.idCliente}/enderecos`)
        .then((response) => {
            res.render('enderecos', {
                listaEnderecos: response.data
            });
        }).catch((error) => res.send(error));
});
app.get('/clientes/:id/enderecos/:idEndereco/deletar', (req, res) => {
    api.delete(`/clientes/${req.params.id}/enderecos/${req.params.idEndereco}`)
        .then((response) => {
            res.redirect(`/clientes/${req.params.id}/enderecos`);
        }).catch((error) => res.send(error));
})
app.post('/clientes/:idCliente/enderecos', (req, res) => {
    api.post(`/clientes/${req.params.idCliente}/enderecos`, req.body)
        .then(() => {
            res.redirect(`/clientes/${req.params.idCliente}/enderecos`);

        }).catch(() => {
            res.send('Erro Endereco.');
        });
});
/* Página redes sociais */
app.get('/clientes/:idCliente/socials', (req, res) => {
    api.get(`/clientes/${req.params.idCliente}/socials`)
        .then((response) => {
            res.render('socials', {
                listaSocials: response.data
            });
        }).catch((error) => res.send(error));
});
app.get('/clientes/:id/socials/:idSocial/deletar', (req, res) => {
    api.delete(`/clientes/${req.params.id}/socials/${req.params.idSocial}`)
        .then((response) => {
            res.redirect(`/clientes/${req.params.id}/socials`);
        }).catch((error) => res.send(error));
})
app.post('/clientes/:idCliente/socials', (req, res) => {
    api.post(`/clientes/${req.params.idCliente}/socials`, req.body)
        .then(() => {
            res.redirect(`/clientes/${req.params.idCliente}/socials`);

        }).catch(() => {
            res.send('Erro Rede Social.');
        });
});
app.listen(PORT, () => {
    console.log(`Running webapp on port ${PORT}`);
});