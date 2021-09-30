import React, {useState, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form";
import {useMapEvents} from "react-leaflet";
import { obtenerClientePorDNI, crearCliente} from "../services/clienteService"
import { crearCabecera} from "../services/facturacion"
import { crearDetalle} from "../services/detalleFacturacion"
import Swal from "sweetalert2"
import {useHistory} from "react-router-dom"
function Compra() {
  const { carrito } = useContext(CarritoContext);
  const [marcador, setMarcador] = useState([-16.4001365, -71.5402707])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


const history = useHistory()
  const recibirSubmit = async (datos) => {

    try {
      let facturacion ={
        id:0,
        fecha: Date.now(),
        precio_total:0,
        id_cliente:0,
        estado:'Finalizar'
     }
  
     let detallefacturacion ={
      id:0,
      id_facturacion: 0,
      id_producto:0,
      cantidad:0,
      precio:0
   }
    
  //registrar cliente
  let clienteObtenido =[]
        clienteObtenido =  await obtenerClientePorDNI(datos.dni)
        if(clienteObtenido[0] === undefined){
           clienteObtenido = await crearCliente(datos)
        }
      console.log(clienteObtenido)
  
        facturacion.id_cliente = clienteObtenido.id
        let facturacreada =  await crearCabecera(facturacion) 
        console.log(facturacreada)
  
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
    detallefacturacion.id_facturacion = facturacreada.id
    detallefacturacion.id_producto = carrito[i].id
    detallefacturacion.cantidad = carrito[i].cantidad
    detallefacturacion.precio =  carrito[i].precio
    
    let detallefacCrea =  await crearDetalle(detallefacturacion) 
    
  }
  Swal.fire({
    icon:'success',
    title:'Compra finalizada!',
    showConfirmButton:true,
    showDenyButton:false,
    confirmButtonText:'Seguir Comprando',
   
  }).then((resultado)=>{
    if(resultado.isConfirmed){
      history.push('/PalValle')
    }
  })
  
    } catch (error) {
      throw error
    }

   

  }

 


  function AddMarker() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        console.log(e.latlng)
        setMarcador([lat,lng])
      }
    });
    return null;
  }

  return (
    <div className="container mt-4">
      <h1>Realizar compra</h1>
      <p className="text-danger">*Por favor verifique los productos e indique los datos solicitados.</p>
      <div className="row">
        {/* carrito */}
        <div className="col-12 col-lg-6">
          <h4>Productos del carrito</h4>
          <ul className="list-group">
            {carrito.map((prod, i) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={i}
              >
                <div className="me-auto">
                  <span className="fw-bold">{prod.nombre}</span>
                  <br />
                  <small>Cantidad: {prod.cantidad}</small>
                </div>
                <span className="badge bg-dark rounded-pill p-3">
                  S/ {prod.cantidad * prod.precio}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* form */}
        <div className="col-12 col-lg-6">
          <h4>Datos del Comprador</h4>
          <form onSubmit={handleSubmit(recibirSubmit)}>
            <div className="mb-2">
              <label className="form-label">Nombres</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Juan"
                {...register("nombre", { required: true })}
              />
              {errors.nombre && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Apellidos</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Chavez"
                {...register("apellidos", { required: true })}
              />
              {errors.nombre && (
                <span className="text-danger">Este campo es obligatorio</span>
              )}
            </div>
            <div className="mb-2">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                placeholder="example@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-danger">
                  Este campo es obligatorio
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="form-label">Número de Celular</label>
              <input
                type="text"
                className="form-control"
                placeholder="987632788"
                {...register("telefono", { minLength: 9 })}
              />
              {errors.numero && (
                <span className="text-danger">
                  Longitud mínima de 9 dígitos
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="form-label">DNI</label>
              <input
                type="text"
                className="form-control"
                placeholder="01234567"
                {...register("dni", { minLength: 8 })}
              />
              {errors.numero && (
                <span className="text-danger">
                  Min 8 dígitos
                </span>
              )}
            </div>

            <div className="mb-2">
              <label className="form-label">Dirección</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ej. Santa Anita"
                {...register("direccion", { pattern: /^[A-Za-z]/i })}
              />
              {errors.ciudad && (
                <span className="text-danger">Solamente Letras</span>
              )}
            </div>
            <button type="submit" className="btn btn-success">
              Confirmar Compra
            </button>
            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Compra;