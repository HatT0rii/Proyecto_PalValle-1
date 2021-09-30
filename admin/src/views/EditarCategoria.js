import React,{useState, useEffect} from 'react'
import FormCategoria from "../components/FormCategoria"
import {editarCategoria, obtenerCategoriaPorId } from "../services/categoriaService"
import {useParams} from "react-router-dom"
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"

function EditarCategoria() {



    let {id} = useParams();

    const [value, setValue] = useState({
    nombre:'',
    descripcion:''
    })

  const history = useHistory()

    const actualizarInput = (e) => {
    e.preventDefault()
    setValue({
      ...value,
      [e.target.name]:e.target.value
    })
  }

  const manejarSubmit = async (e) => {
    e.preventDefault()

    try {
      
      await editarCategoria({...value})
      await Swal.fire({
        icon:"success",
        title:"Categoria editada exitosamente",
        showConfirmButton:false,
        timer:2000
      })
      history.push('/ListarCategoria')
    } catch (error) {
      console.log(error)
    }
 }

   const getCategoria = async () => {
    try {
      let categoriaObtenido = await obtenerCategoriaPorId(id)
      setValue({...categoriaObtenido})
    } catch (error) {
      console.log(error)
    }
  }

   useEffect(() => {
    getCategoria()
  }, [])

    return (
    <div>
     <h3 className ="mt-4 font-weight-bold text-success">Editar Categoria</h3>
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



export default EditarCategoria
