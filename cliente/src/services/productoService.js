import axios from "axios"

const URL = `${process.env.REACT_APP_URL_API_1}/Producto`

const obtenerProductos = async () => {
  try {
      let {data} = await axios.get(URL)
      console.log(URL)
      return data
  } catch (error) {
      throw error
  }
}
const productoId = async (id) => {
  try {
    let { data } = await axios.get(`${URL}/${id}`)
    console.log(data)
    return data
  } catch (error) {
    throw error
  }
}

export {
  obtenerProductos,
  productoId
}