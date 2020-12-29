const telefones = require('../models').telefones;

module.exports = {
    create(req, res) {
        return telefones
            .create({
                clienteId: req.params.idCliente,
                tipo_telefone: req.body.tp_telefone,
                numero_telefone: req.body.num_telefone
            })
            .then((response) => res.status(201).send(response))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return telefones
            .findAll({
                where: [{
                    clienteId: req.params.idCliente
                }],
            })
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return telefones
            .destroy({
                where: [{
                    id: req.params.idTelefone
                }],
            })
            .then(() => res.sendStatus(204))
            .catch((error) => res.status(400).send(error));
    },
}