const enderecos = require('../models').enderecos;

module.exports = {
    create(req, res) {
        return enderecos
            .create({
                clienteId: req.params.idCliente,
                nome_rua: req.body.endereco,
                numero_casa: req.body.numero,
                complemento: req.body.complemento,
                cep: req.body.cep,
                bairro: req.body.bairro,
                cidade: req.body.cidade,
                estado: req.body.estado
            })
            .then((response) => res.status(201).send(response))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return enderecos
            .findAll({
                where: [{
                    clienteId: req.params.idCliente
                }],
            })
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        console.log(req.params.idEndereco);
        return enderecos
            .destroy({
                where: [{
                    id: req.params.idEndereco
                }],
            })
            .then(() => res.sendStatus(204))
            .catch((error) => res.status(400).send(error));
    },
}