import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Detalle_Facturacion`


const obtenerDetalleFacturacion = async () => {
    try {
      let { data } = await axios.get(URL)
      return data
     
    } catch (error) {
      throw error
    }
  }
  const obtenerDetalleFacturacionPorId = async (id) =>{
    try {
      let {data} = await axios.get(`${URL}/NroFac/${id}`)
  
    
      return data
     
    } catch (error) {
      throw error
    }
  }

  export {
    obtenerDetalleFacturacion,
    obtenerDetalleFacturacionPorId
  }