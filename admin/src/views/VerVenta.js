import React, {useState, useEffect} from 'react'
import FormVenta from "../components/FormVenta"
import FormDetalleVenta from "../components/FormDetalleVenta"
import {useParams} from "react-router-dom"
import {obtenerPorId} from "../services/ventaService"
import {obtenerClientePorId} from "../services/clienteService"
import {obtenerDetalleFacturacionPorId} from "../services/detalleVentaService"
import {obtenerProducto, obtenerProductoPorId} from "../services/productoService"
function VerVenta() {

    let {id} = useParams();
    const [value, setValue] = useState({
        id:1,
        fecha:'',
        precio_total:0,
        id_cliente:1,
        estado:''
      })
      const [cliente, setCliente] = useState([])
      const [detalle, setDetalle] = useState([])
      const [producto, setProducto] = useState([])
     

      const actualizarInput = (e) => {
        e.preventDefault()
        setValue({
          ...value,
          [e.target.name]:e.target.value
        })
      }

      const getVenta= async () => {
        try {
          let ventaObtenida = await obtenerPorId(id)
          setValue({...ventaObtenida})
        } catch (error) {
          console.log(error)
        }
      }

      const getCliente= async () => {
        try {
          let clienteObtendio = await obtenerClientePorId(value.id_cliente)
          setCliente({...clienteObtendio})
        } catch (error) {
          console.log(error)
        }
      }

  

      const getDetalle= async () => {
        try {
          let detalleObtenido = await obtenerDetalleFacturacionPorId(id)
          let detallesOk = []
         for (let i = 0; i < detalleObtenido.length; i++) {
          let productoOk =  await obtenerProductoPorId(detalleObtenido[i].id_producto)
              let productoExistente = {
                ...detalleObtenido[i],
                nombre: (productoOk.nombre.length > 0 ? productoOk.nombre : "") 
              }
              detallesOk.push(productoExistente)
        }        
        setDetalle([...detallesOk])
        } catch (error) {
          console.log(error)
        }
      }
     

    


      useEffect(() => {
        getVenta()
        getCliente()
        getDetalle()
        
      }, [])

    return (
        <div className="mb-3">
             <h3 className ="mt-4 font-weight-bold text-success">Información Venta</h3>
           <hr/>
            <FormVenta
                value={value}
                setValue = {setValue}
                actualizarInput = {actualizarInput}
                cliente={cliente}
            />
            <h3 className ="mt-4 font-weight-bold text-success">Detalle Venta</h3>
           <FormDetalleVenta
               detalle ={detalle}
              
           />
        </div>
    )
}

export default VerVenta
