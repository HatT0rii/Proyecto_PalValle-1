import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Detalle_Facturacion`

const crearDetalle = async (nuevoDetalle) =>{
    try {
        let headers ={
            "Content-Type" : "application/json"
        }
        let {data} = await axios.post(URL, nuevoDetalle, {headers})
        return data
    } catch (error) {
        throw error
    }
}

export {
    crearDetalle
  } 