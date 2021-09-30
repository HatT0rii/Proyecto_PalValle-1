import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Facturacion`


const obtenerFacturacion = async () => {
    try {
      console.log(URL)
      let { data } = await axios.get(URL)
      return data
    } catch (error) {
      throw error
    }
  }
  const obtenerPorId = async (id) =>{
    try {
      
      let {data} = await axios.get(`${URL}/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  export {
    obtenerFacturacion,
    obtenerPorId
  }