import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Cliente`

const obtenerClientes = async () => {
    try {
        let {data} = await axios.get(URL)
        return data
    } catch (error) {
        console.log(error)
    }
}

const obtenerClientePorId = async (id) =>{
    try {
      
      let {data} = await axios.get( `${URL}/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  const crearCliente = async (nuevoCliente) =>{
    try {
        let headers ={
            "Content-Type" : "application/json"
        }
        let {data} = await axios.post(URL, nuevoCliente, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const editarCliente = async (clienteEditado) => {
  try {
    let headers = {
      "Content-Type":"application/json"
    }
    let { data } = await axios.put(`${URL}/${clienteEditado.id}`, clienteEditado, {headers})
    console.log(clienteEditado)
    return data
  } catch (error) {
    console.log(error)
  }
}

const eliminarCliente = async (id) => {
  try {
    
    let { data } = await axios.delete(`${URL}/${id}`)
    console.log(`${URL}/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}



export {
    obtenerClientes,
    obtenerClientePorId,
    crearCliente,
    editarCliente,
    eliminarCliente



}