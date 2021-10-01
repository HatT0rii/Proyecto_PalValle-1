const mercadopago = require ('mercadopago');
const { Producto } = require('../models')

class PaymentController {

    // /api/products/:id/buy
    static startPayment(req, res) {

        mercadopago.configure({
            access_token: process.env.MP_ACCESS_TOKEN
        });

        Producto.findByPk(req.params.id)
            .then((data) => {
                
                let preference = {
                    items: [
                      {
                        title: data.name,
                        unit_price: data.price,
                        quantity: 1,
                      }
                    ],
                    payment_methods: {
                        "excluded_payment_types": [
                            {id: "atm"}
                        ],
                        installments: 3
                    },
                    back_urls: {
                        success: 'http://localhost:3000/producto/congrats'
                    },
                    external_reference: '' + req.params.id
                }

                console.log(preference)

                mercadopago.preferences.create(preference)
                .then(function(data){
                    console.log(data.response.sandbox_init_point)
                    res.redirect(data.response.sandbox_init_point)
                }).catch(function(error){
                    console.log(error);
                    res.sendStatus(500)
                });
        
            })
            .catch(function(error){
                console.log(error);
                res.sendStatus(500)
            });
    }

    static successfulPayment(req, res) {
        let productoId = req.query.external_reference

        Producto.findByPk(productoId)
            .then((data)=>{
                console.log(data)
                let new_stock = data.stock - 1
                Producto.update({stock: new_stock}, {where: {id: productoId}})
                .then( (data) => {
                    res.redirect('/Producto/:id')
                })
                .catch( (err) => {
                    res.status(404).send({
                        message: err.message
                    })
                })
            }).catch( (err) => {
                res.status(404).send({
                    message: err.message
                })
            })

    }

}

module.exports = {PaymentController}