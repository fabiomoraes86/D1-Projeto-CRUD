const socials = require('../models').socials;

module.exports = {
    create(req, res) {
        return socials
            .create({
                clienteId: req.params.idCliente,
                nome_rede_social: req.body.nome_rede_social,
                link_rede_social: req.body.link_rede_social
            })
            .then((response) => res.status(201).send(response))
            .catch((error) => res.status(400).send(error));
    },
    list(req, res) {
        return socials
            .findAll({
                where: [{
                    clienteId: req.params.idCliente
                }],
            })
            .then((response) => res.status(200).send(response))
            .catch((error) => res.status(400).send(error));
    },
    delete(req, res) {
        return socials
            .destroy({
                where: [{
                    id: req.params.idSocial
                }],
            })
            .then(() => res.sendStatus(204))
            .catch((error) => res.status(400).send(error));
    },
}