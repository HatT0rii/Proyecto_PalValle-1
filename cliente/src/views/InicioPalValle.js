import {useState, useEffect} from 'react'
import {obtenerProductos} from "../services/productoService"
import Productos from '../components/Productos'
import Header from "../components/Header"
// import Cards from '../components/Cards'
import CategoriesCarousel from '../components/CategoriesCarousel'
/* import GroupCategories from '../components/GroupCategories' */


function InicioPalValle() {
    
  const [productos, setProductos] = useState ([])
  console.log("Inicio pal vale")
    const getProductos = async () => {
        let productosObtenidos = await obtenerProductos()
        setProductos(productosObtenidos)
      
      }
    
      useEffect(()=>{
        getProductos()
      },[])

    return (
        <div>
         <Header />
      
        <div className="container">
          <div className="row">
          <div classNameName="col-12 col-md-12">
            <h1 className="text-center text-success fw-bold m-5">MÁS VENDIDOS</h1>
          </div>
        </div>
        <div className="row">
          <div classNameName="col-12 col-md-12">
            {/* <Cards/> */}
          <CategoriesCarousel/>
          </div>
        </div>
        <div className="row m-5">
          <div classNameName="col-12 col-md-12">
            <h1 className="text-center text-success fw-bold m-5">CATEGORÍA</h1>
            <p className="lead text-center">PalValle, empresa peruana, que ofrece la venta de productos naturales en diferentes marcas para el consumo de la familia, pensando en una alimentación saludable y balanceada.</p>
          
          </div>
        </div>
       {/*   <div className="row">*/}
        {/* <div classNameName="col-md-6 mb-3"> */}
          {/*  lo comente porque sale error */}
        {/*  <GroupCategories/>  */}
          
        {/* </div>  */} 
        {/* </div>  */} 
       
        <div className="row">
        <div classNameName="col-md-6 mb-3">
        <Productos productos={productos} categoria="Bebidas" id_categoria="1"/>
        <Productos productos={productos} categoria="Lacteos" id_categoria="2"/> 
        <Productos productos={productos} categoria="Frutas" id_categoria="3"/> 
        <Productos productos={productos} categoria="Abarrotes" id_categoria="4"/> 
          
          </div>
        </div>
        </div>

        </div>
    )
}

export default InicioPalValle
