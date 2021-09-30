import React, {useState} from 'react'
import FormCliente from "../components/FormCliente"
import {crearCliente} from "../services/clienteService"
import Swal from "sweetalert2"
import {useHistory} from "react-router-dom"
function CrearCliente() {
    const [value, setValue] = useState({
        nombre:'',
        apellidos:'',
        email:'',
        dni:0,
        telefono:0,
        direccion: '',
        distrito:'',
        provincia:'Lima',
        nro_tarjeta:0,
        stock:0,
        fecha_vencimiento: '',   
        cod_seguridad:''
     })
     const history = useHistory()

     const actualizarInput = (e) => {
        setValue({
          ...value,
          [e.target.name]: e.target.value
        })
      }

    const manejarSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await crearCliente({...value})
      await Swal.fire({
        icon:"success",
        title:"Cliente Creado",
        showConfirmButton:false,
        timer:2000
      })
      history.push('/ListaClientes')
    } catch (error) {
      Swal.fire({
        icon:"error",
        title:"Sucedio un error inesperado",
        text:`${error}`,
        showConfirmButton:true
      })
    }
  }

    return (
    
          <div>
        <h3 className ="mt-4 font-weight-bold text-success">Crear Cliente</h3>
        <hr/>
        <FormCliente value = {value} 
        actualizarInput= {actualizarInput} 
        setValue ={setValue}
        manejarSubmit = {manejarSubmit}
       
        /> 
    </div>
       
    )
}

export default CrearCliente
