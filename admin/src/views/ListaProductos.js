import React, {useState, useEffect} from 'react'
import {obtenerProducto} from "../services/productoService"
import {Link} from "react-router-dom"


function ListaProductos() {
    const [productos, setProductos] = useState([])

    const getProductos = async () => {
        try {
            const productosObtenidos = await obtenerProducto()
            setProductos(productosObtenidos)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProductos()
    }, [])
    return (
        <div className="m-3">
           <h3 className ="mt-4 font-weight-bold text-success">Listar Productos</h3>
           <hr/>
            <Link className = "btn btn-primary btn-md  my-2"  to="/crearproducto">Crear Producto</Link>
         
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                        <th colSpan="2" className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod, i) => (
                        <tr key= {i}>
                            <td>{prod.id}</td>
                            <td>{prod.nombre}</td>
                            <td>{prod.descripcion}</td>
                            <td>{prod.precio}</td>
                            <td>{prod.stock}</td>
                            <td>
                            <Link  className="btn btn-warning btn-sm" to={`/editarproducto/${prod.id}`}><i class="fas fa-edit"></i></Link>
                            </td>
                            <td>
                            <Link className="btn btn-danger btn-sm" to={`/eliminarproducto/${prod.id}`}><i class="fas fa-trash-alt"></i></Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListaProductos