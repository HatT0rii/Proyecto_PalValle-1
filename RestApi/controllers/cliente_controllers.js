const { Cliente } = require('../models')

class ClienteController {

    static create(req, res) {
        let payload = req.body

        Cliente.create(payload)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(400).send({
                    message: err.message
                })
            })
    }

   
    static findAllData(req, res) {
       
        Cliente.findAll().then((data) => {
                res.send(data)
            }).catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static update(req, res) {
        let pk = req.params.id
        let payload = req.body 

        Cliente.update(payload, {where: {id: pk}})
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
        Cliente.findByPk(req.params.id)
            .then( (data) => {
                res.send(data)
            })
            .catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })
    }

    static findClienteByDNI(req, res) {
        let nrodoc = req.params.dni
       
        Cliente.findAll({
            where: {dni: nrodoc}
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
        Cliente.destroy({ where: {id: pk} })
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

module.exports ={ ClienteController }