import React from 'react'
import {Route} from "react-router-dom"

import ListarCategoria from "./views/ListarCategoria"
import ListaClientes from "./views/ListaClientes"
import Home from "./views/Home"
import NoMatch from "./views/NoMatch"
import CrearProducto from "./views/CrearProducto"
import EditarProducto from "./views/EditarProducto"
import CrearCategoria from "./views/CrearCategoria"
import EditarCategoria from "./views/EditarCategoria"
import ListaProductos from "./views/ListaProductos"
import Login from "./components/Login"
import ListarVentas from "./views/ListarVentas"
 import VerVenta from "./views/VerVenta"
import CrearCliente from './views/CrearCliente'
import EditarCliente from './views/EditarCliente'


//ok
function Routes() {
    return (
        <div>
 
         <Route exact path="/Login" component={Login}/>   
         <Route exact path="/Home" component={Home}/>  
         <Route exact path="/detalleventa/:id" component={VerVenta}/>   
         <Route exact path="/ListarVentas" component={ListarVentas}/> 
         <Route exact path="/ListaProductos" component={ListaProductos}/> 
         <Route exact path="/crearproducto" component={CrearProducto}/>    
         <Route exact path="/editarproducto/:id" component={EditarProducto}/> 
         <Route exact path="/ListarCategoria" component={ListarCategoria}/>   
         <Route exact path="/crearcategoria" component={CrearCategoria}/>  
         <Route exact path="/editarcategoria/:id" component={EditarCategoria}/>  
         <Route exact path="/ListaClientes" component={ListaClientes}/>   
         <Route exact path="/crearCliente" component={CrearCliente}/> 
         <Route exact path="/editarcliente/:id" component={EditarCliente}/> 
         <Route component = {NoMatch} />
        </div>
    )
}

export default Routes
