import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Facturacion`

const crearCabecera = async (nuevo) =>{
    try {
        let headers ={
            "Content-Type" : "application/json"
        }
        let {data} = await axios.post(URL, nuevo, {headers})
        return data
    } catch (error) {
        throw error
    }
}

const edtarfacturacion = async (facturEditable) => {
    try {
      let headers = {
        "Content-Type":"application/json"
      }
      let { data } = await axios.put(`${URL}/${facturEditable.id}`, facturEditable, {headers})
     
      return data
    } catch (error) {
      console.log(error)
    }
  }
  
export {
    crearCabecera,
    edtarfacturacion
  } 