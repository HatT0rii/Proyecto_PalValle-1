const { Categoria, Producto } = require('../models')

class CategoriaController {

    static create(req, res) {
        let payload = req.body

        Categoria.create(payload)
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
        Categoria.findAll({
            include: {
                model: Producto, as: 'producto'
            }
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
        // /category/:id
        let pk = req.params.id
        let payload = req.body 

        Categoria.update(payload, {where: {id: pk}})
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
        // let pk = req.params.id
        Categoria.findByPk(req.params.id)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static findProductsByCategory(req, res) {
        //  /category/:id/products
        let category_id = req.params.id

        // products = await Product.findAll()...

        Producto.findAll({
            where: {CategoryId: category_id}
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

    static delete(req, res) {
        let pk = req.params.id
        Categoria.destroy({ where: {id: pk} })
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

module.exports ={ CategoriaController }