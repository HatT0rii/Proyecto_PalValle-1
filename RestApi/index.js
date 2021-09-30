const express =  require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors');
const { CategoriaController } = require( './controllers/categoria_controllers' )
const { ProductoController } = require('./controllers/producto_controllers') 
const { ClienteController } = require('./controllers/cliente_controllers') 
const { FacturacionController } = require('./controllers/facturacion_controllers') 
const { DetalleFacturacionController } = require('./controllers/detalle_facturacion_controllers') 

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) =>{
    res.send("hello word")
})




app.post('/Categorias',  CategoriaController.create)
app.get('/Categorias', CategoriaController.findAll)
app.put('/Categorias/:id',  CategoriaController.update)
app.get('/Categorias/:id', CategoriaController.findOne)
app.get('/Categorias/:id/producto', CategoriaController.findProductsByCategory)
app.delete('/Categorias/:id', CategoriaController.delete)

app.post('/Producto',  ProductoController.create)
app.get('/Producto', ProductoController.findAll) 
app.get('/Producto/:id', ProductoController.findOne) 
app.put('/Producto/:id', ProductoController.update) 
app.delete('/Producto/:id', ProductoController.delete) 

app.post('/Cliente',  ClienteController.create)
app.get('/Cliente', ClienteController.findAllData) 
app.get('/Cliente/:id', ClienteController.findOne) 
app.get('/Cliente/nrodoc/:dni', ClienteController.findClienteByDNI) //http://localhost:3000/Cliente/nrodoc/12342145
app.put('/Cliente/:id', ClienteController.update) 

app.post('/Facturacion',  FacturacionController.create)
app.get('/Facturacion', FacturacionController.findAll) 
app.get('/Facturacion/:id', FacturacionController.findOne) 
app.put('/Facturacion/:id', FacturacionController.update) 
app.delete('/Facturacion/:id', FacturacionController.delete) 


app.post('/Detalle_Facturacion',  DetalleFacturacionController.create)
app.get('/Detalle_Facturacion', DetalleFacturacionController.findAll) 
app.get('/Detalle_Facturacion/:id', DetalleFacturacionController.findOne) 
app.get('/Detalle_Facturacion/NroFac/:id_facturacion', DetalleFacturacionController.findDetalleByIDFac)
app.put('/Detalle_Facturacion/:id', DetalleFacturacionController.update) 
app.delete('/Detalle_Facturacion/:id', DetalleFacturacionController.delete)  


app.listen(3000)