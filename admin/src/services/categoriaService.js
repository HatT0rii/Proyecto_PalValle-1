import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Categorias`


const crearCategoria = async (nuevaCategoria) =>{
    try {
        let headers ={
             
            "Content-Type" : "application/json"
          
        }
        let {data} = await axios.post(URL, nuevaCategoria, {headers})
        return data
    } catch (error) {
        throw error
    }
}


const obtenerCategorias  = async () =>{
    try {
        let {data} = await axios.get(URL)
    
        return data
    } catch (error) {
      throw error  
    }
}

  const obtenerCategoriaPorId = async (id) =>{
    try {
      
      let {data} = await axios.get(`${URL}/${id}`)
      console.log(data)
      return data
    } catch (error) {
      throw error
    }
  }

  const editarCategoria = async (categoriaEditado) =>{
    console.log(`${URL}/${categoriaEditado}`)
    try {
      let  headers ={
        "Content-Type":"application/json"
      }

     
      let { data } = await axios.put(`${URL}/${categoriaEditado.id}`, categoriaEditado, {headers})
      return data
    } catch (error) {
      console.log(error)
     // throw error
    }
  }

export{
    crearCategoria,
    obtenerCategorias,
    obtenerCategoriaPorId,
    editarCategoria
}