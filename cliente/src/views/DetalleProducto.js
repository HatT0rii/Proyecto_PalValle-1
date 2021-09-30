import {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom"
import { productoId } from "../services/productoService"
import {CarritoContext} from "../context/carritoContext"
import Swal from "sweetalert2"
import {useHistory} from "react-router-dom"


function DetalleProducto() {
    const [producto, setProducto] = useState({})

    let {id} = useParams()
    let {anadirProducto} = useContext(CarritoContext)
    let history = useHistory()

    const anadirProductoACarrito = () => {
      anadirProducto({...producto})
      Swal.fire({
        icon:'success',
        title:'Producto Añadido!',
        showConfirmButton:true,
        showDenyButton:true,
        confirmButtonText:'Seguir Comprando',
        denyButtonText:'Ir al carrito'
      }).then((resultado)=>{
        if(resultado.isConfirmed){
          history.push('/PalValle')
        }else if(resultado.isDenied){
          history.push('/carrito')
        }
      })
    }

    const getProducto = async () => {
        try {
          let productoObtenido = await productoId(id);
          setProducto({ ...productoObtenido })
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        getProducto();
      }, [])

    return (
        <div>
        
          <div className="titulo-detalle">
            <div className="container p-4 text-center">
              <h2 className="fw-bold">{producto.nombre}</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img
                  src={producto.foto}
                  alt={`foto de ${producto.nombre}`}
                  className="img-fluid"
                />
              </div>
              <div className="col-12 col-md-6">
                    <h5 className="fw-bold">Descripción:</h5>
                    <p>{producto.descripcion}</p>
                    <hr />
                    <div className="py-3 d-flex justify-content-between align-items-center">
                    <span className="fw-bold" style={{ fontSize: "32px" }}>
                        S/ {producto.precio}
                    </span>
                    <button className="btn btn-dark btn-lg"   onClick = {anadirProductoACarrito}>
                        Añadir a Carrito
                    </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
    )
}

export default DetalleProducto
