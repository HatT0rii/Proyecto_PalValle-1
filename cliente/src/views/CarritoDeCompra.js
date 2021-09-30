import { useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import {Link} from "react-router-dom"

function CarritoDeCompra() {

  let { carrito } = useContext(CarritoContext);
  
  return (
    <div className="container mt-6">
      <div className="my-4 text-center">
        <h1 className="fw-bold">
      <i class="fas fa-cart-arrow-down mx-3"> </i> 
        
           Mis Productos Seleccionados
        </h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Precio Total</th>
          </tr>
        </thead>
        <tbody>
        {carrito.map((prod, i) => (
          <tr key={i}>
            <td>{prod.nombre}</td>
            <td>{prod.cantidad}</td>
            <td>S/ {prod.precio}</td>
            <td>S/ {prod.precio * prod.cantidad}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <Link className="btn btn-success" to='/compra'>
        Realizar Compra
      </Link>
    </div>
  );
}

export default CarritoDeCompra;