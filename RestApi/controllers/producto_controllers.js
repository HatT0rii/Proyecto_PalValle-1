const { Producto } = require('../models')

class ProductoController {

    static create(req, res) {
        let payload = req.body
        console.log(payload)
        console.log(req.user)

        /* if (req.user.role=="admin") { */

            Producto.create(payload)

                .then( (data) => { 
                    res.send(data) 
                })
                .catch( (err) => {
                    res.status(400).send({
                        message: err.message
                    })
                })
       /*  } else {
            res.sendStatus(403)
        } */


    }

    static findAll(req, res) {
        Producto.findAll()
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
        Producto.findByPk(pk)
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
        let pk = req.params.id
        let payload = req.body

        Producto.update(payload, {where: {id: pk} })
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
        Producto.destroy({ where: {id: pk} })
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

module.exports = { ProductoController }