import React, {useState, useEffect} from 'react'
import  FormProducto from "../components/FormProducto"
import {crearProducto} from "../services/productoService"
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
import {obtenerCategorias} from "../services/categoriaService"


function CrearProducto() {
    const [value, setValue] = useState({
        nombre:'',
        descripcion:'',
        precio:0,
        stock:0,
        fecha_vencimiento: '',   
        fotos:[],    
        id_categoria:1
     })

     const [categorias, setCategorias] = useState ([])
     const history = useHistory()

     const actualizarInput = (e) =>{
        //console.log(e)
        setValue({...value, [e.target.name]: e.target.value})
    }

    const getCategorias = async() =>{
        try {
            let categoriasObtenidas = await obtenerCategorias()
            setCategorias([...categoriasObtenidas]) 
        } catch (error) {
            throw error
        }
    
    }

    
const manejarSubmit = async (e, urlsFotos) => {
    e.preventDefault()
    try {

        await crearProducto({...value, fotos:[...urlsFotos]})
        await Swal.fire({
        icon:'success',
        title: 'Producto creado exitosamente',
        showConfirmButton:false,
        timer:2000
         })
         history.push("ListaProductos")
    } catch (error) {
        console.log(error)
    }
}

useEffect(() =>{
    getCategorias()
}, [])
return (
    <div>
        <h3 className ="mt-4 font-weight-bold text-success">Crear Producto</h3>
        <hr/>
        <FormProducto value = {value} 
        actualizarInput= {actualizarInput} 
        setValue ={setValue}
        manejarSubmit = {manejarSubmit}
        categorias ={categorias}
        />
    </div>
)
}

export default CrearProducto