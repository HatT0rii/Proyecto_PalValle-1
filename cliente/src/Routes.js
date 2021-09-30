import {Route} from "react-router-dom"
import InicioPalValle from "./views/InicioPalValle"
import DetalleProducto from "./views/DetalleProducto"
import CarritoDeCompra from "./views/CarritoDeCompra"
import Compra from "./views/Compra"

function Routes() {
    return (
        <div>
           <Route path="/PalValle" exact component={InicioPalValle}/>
           <Route path="/detalle/:id" component={DetalleProducto}/>
           <Route path="/carrito" exact component={CarritoDeCompra} />
           <Route path='/compra' exact component={Compra} />
        </div>
    )
}

export default Routes
