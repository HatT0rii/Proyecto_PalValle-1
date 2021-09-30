import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Cliente`

const obtenerClientePorId = async (id) =>{
    try {
      
      let {data} = await axios.get(`${URL}/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  const obtenerClientePorDNI = async (dni) =>{
    try {
      
      let {data} = await axios.get(`${URL}/nrodoc/${dni}`)
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








export {
    obtenerClientePorId,
    crearCliente,
    obtenerClientePorDNI    
  }