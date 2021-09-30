const { Facturacion } = require('../models')

class FacturacionController {

    static create(req, res) {
        let payload = req.body
            Facturacion.create(payload)

                .then( (data) => { 
                    res.send(data) 
                })
                .catch( (err) => {
                    res.status(400).send({
                        message: err.message
                    })
                })
    }

    static findAll(req, res) {
        Facturacion.findAll()
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static findOne(req, res) {
        let pk = req.params.id
        Facturacion.findByPk(pk)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        // PUT product/:id
        let pk = req.params.id
        let payload = req.body

        Facturacion.update(payload, {where: {id: pk} })
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })

    }

    static delete(req, res) {
        let pk = req.params.id
        Facturacion.destroy({ where: {id: pk} })
            .then( (data) => {
                res.status(200).send("DELETED")
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

}

module.exports = { FacturacionController }