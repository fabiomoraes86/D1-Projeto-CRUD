const clientes = require('../models').clientes;
const enderecos = require('../models').enderecos;

module.exports = {
    create(req, res) {
        return clientes
            .create({
                nome: req.body.nome,
                data_nascimento: req.body.data_nascimento,
                cpf: req.body.cpf,
                rg: req.body.rg
            })
            .then((response) => res.status(201).send(response))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return clientes
            .findAll()
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(400).send(error));
    },
    findById(req, res) {
        return clientes
            .findOne({
                where:[{
                    id : req.params.id
                }],
            })
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(400).send(error));
    },
    patch(req, res) {
        console.log(req.params.id)
        return clientes
            .update( req.body, {
                where:[{
                    id : req.params.id
                }],
            })
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return clientes
            .destroy({
                where: [{
                    id: req.params.id
                }],
            })
            .then(() => res.sendStatus(204))
            .catch((error) => res.status(400).send(error));
    },
}