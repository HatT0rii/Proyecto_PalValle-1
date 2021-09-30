import React,{useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import GroupCategories from "../components/GroupCategories"

function Categorias() {

    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
          let productosObtenidos = await obtenerProductos()
          setProductos(productosObtenidos)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(()=>{
        getProductos()
      },[])

    return (
        <div>
            <GroupCategories 
                productos={productos} 
                categoria="" 
                id_categoria="" 
                mostrarFiltro={true}
                setProductos={setProductos}
            />
        </div>
    )
}

export default Categorias
