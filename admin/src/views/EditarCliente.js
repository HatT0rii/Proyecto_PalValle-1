import React,  {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import {editarCliente, obtenerClientePorId} from "../services/clienteService"
import FormCliente from "../components/FormCliente"
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"

function EditarCliente() {
    let {id} = useParams();
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
 
     const actualizarInput = (e) =>{
        e.preventDefault()
        setValue({
            ...value, 
            [e.target.name] : e.target.value
        })
    }
    const getCliente = async() =>{
        try {
        let clienteObnt = await obtenerClientePorId(id)
        setValue({...clienteObnt})
        
        } catch (error) {
            console.log(error)
        }
    
        }
   
    const manejarSubmit = async (e) => {
        try {
            e.preventDefault()
            await editarCliente({...value, id})
            await Swal.fire({
                icon:'success',
                title: 'Cliente editado exitosamente',
                showConfirmButton:false,
                timer:2000
                })
                history.push("/ListaClientes")
        } catch (error) {
            console.log(error)
        }
    
    }
    useEffect(() => {
        getCliente()
    }, [])

    return (
        <div>
        <h3 className ="mt-4 font-weight-bold text-success">Editar Cliente</h3>
           <hr/>
            <FormCliente value = {value} 
        actualizarInput= {actualizarInput} 
        setValue ={setValue}
        manejarSubmit = {manejarSubmit}
       
        /> 
        </div>
    )
}

export default EditarCliente
