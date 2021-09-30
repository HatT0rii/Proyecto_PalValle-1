import {useState, createContext} from "react"

export const CarritoContext = createContext()

const CarritoContextProvider = (props) =>{
    const [carrito, setCarrito] = useState([])

    const anadirProducto = (producto) =>{
        console.log("estoy en carrito")
    console.log(producto)
        for (let i = 0; i < carrito.length; i++) {
          if(carrito[i].id === producto.id){
                let productoExistente = {
                    ...carrito[i],
                    cantidad: carrito[i].cantidad + 1
                }

                let carritoTmp = [...carrito]
                
                carritoTmp.splice(i, 1)
                carritoTmp.push(productoExistente)
                setCarrito([...carritoTmp])
                return;
          }
        }
     
     
        setCarrito([...carrito, {...producto, cantidad:1}])
      
    }

     return (
         <CarritoContext.Provider
         value={{
             carrito,
             anadirProducto
         }}
         >
            {props.children
            
            }
         </CarritoContext.Provider>
     )

}

export default CarritoContextProvider