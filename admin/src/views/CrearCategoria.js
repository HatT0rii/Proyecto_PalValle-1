import React, {useState} from 'react'
import FormCategoria from "../components/FormCategoria"
import {crearCategoria} from "../services/categoriaService"
import Swal from "sweetalert2"
import {useHistory} from "react-router-dom"

function CrearCategoria() {

  const [value, setValue] = useState({
  nombre:'',
  descripcion:''
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
      await crearCategoria({...value})
      await Swal.fire({
        icon:"success",
        title:"Categoria creada exitosamente",
        showConfirmButton:false,
        timer:2000
      })
      history.push('/ListarCategoria')
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
      <h3 className ="mt-4 font-weight-bold text-success">Crear Categoría</h3>
           <hr/>
      <FormCategoria 
        value={value} 
        actualizarInput = {actualizarInput}
        setValue={setValue}
        manejarSubmit={manejarSubmit}
      />
    </div>
  )
}

export default CrearCategoria
