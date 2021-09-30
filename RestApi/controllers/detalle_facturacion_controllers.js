const { Detalle_Facturacion } = require('../models')

class DetalleFacturacionController {

    static create(req, res) {
        let payload = req.body
        Detalle_Facturacion.create(payload)

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
        Detalle_Facturacion.findAll()
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
        Detalle_Facturacion.findByPk(pk)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static findDetalleByIDFac(req, res) {
        let idFactuacion = req.params.id_facturacion
       
        Detalle_Facturacion.findAll({
            where: {id_facturacion: idFactuacion}
        })
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

        Detalle_Facturacion.update(payload, {where: {id: pk} })
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
        Detalle_Facturacion.destroy({ where: {id: pk} })
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

module.exports = { DetalleFacturacionController }