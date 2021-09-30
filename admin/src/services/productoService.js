import axios from "axios"
import  {storage} from "../config/Firebase.js"

const URL = `${process.env.REACT_APP_URL_API_1}/Producto`

const obtenerProducto = async () => {
    try {
        let {data} = await axios.get(URL)
        console.log(URL)
        return data
    } catch (error) {
        throw error
    }
}

const crearProducto = async (nuevoProducto) =>{
    try {
      let  headers ={
        "Content-Type":"application/json"
      }
      let {data} = await axios.post(URL, nuevoProducto, {headers})
      return data
    } catch (error) {
      throw error
    }
  }

  const editarProducto = async (productoEditado, id) =>{
    try {
      let  headers ={
        "Content-Type":"application/json"
      }
      //AWAIT AXIOS POST SE DEBE PASAR URL, actualizar RECURSO Y CABECERAS
      let {data} = await axios.put( `${URL}/${id}` , productoEditado, {headers})
      return data
    } catch (error) {
      throw error
    }
  }
  
  const obtenerProductoPorId = async (id) =>{
    try {
      
      let {data} = await axios.get( `${URL}/${id}`)
      return data
    } catch (error) {
      throw error
    }
  }

  const subirArchivo = (imagen) => {
    return new Promise((resolve, reject) =>{
      let refStorage = storage.ref(`fotos_palvalle/${imagen.name}`)
      let tareaSubida =  refStorage.put(imagen);
      //comenzamos a escuchar
      tareaSubida.on("state_changed", 
      //escuchar el progreso
      ()=>{},
      //manejar error
      (error) =>{ reject(error)},
      //me da url descarga
      () => {
        tareaSubida.snapshot.ref.getDownloadURL().then((urlImagen) => {
          resolve(urlImagen)
        })
      }
      )
  
    })
  
  }





export {
    obtenerProducto,
    crearProducto,
    editarProducto,
    obtenerProductoPorId,
    subirArchivo
}