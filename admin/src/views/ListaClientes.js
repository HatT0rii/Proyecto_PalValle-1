import React, {useState, useEffect} from 'react'
import {obtenerClientes, eliminarCliente} from "../services/clienteService"
import {Link} from "react-router-dom"
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom"
function ListaClientes() {
    const [clientes, setClientes] = useState([])
    let history = useHistory()

    const getClientes = async () => {
        try {
            const clientesNuevos = await obtenerClientes()
            setClientes([...clientesNuevos])
        } catch (error) {
            console.log(error)
        }
    }


    const eliminar=(id) =>{
      Swal.fire({
        icon:'warning',
        title:'¿usted desea eliminar?',
        showConfirmButton:true,
        showDenyButton:true,
        confirmButtonText:'si',
        denyButtonText:'no'
      }).then((resultado)=>{
        if(resultado.isConfirmed){
           eliminarCliente(id)
          history.push("/ListaClientes")
        }else if(resultado.isDenied){
          history.push("/ListaClientes")
        }
      })
    }
    useEffect(() => {
        getClientes()
    }, [])
    return (
        <div className="mb-3">
           <h3 className ="mt-4 font-weight-bold text-success">Listar Cliente</h3>
           <hr/>
           <Link to='/crearCliente' className="btn btn-primary btn-md my-2">
           Crear Cliente
           </Link>
           <table className="table">
        <thead>
          <tr>
            <th>Número</th>
            <th>Apellidos</th>
            <th>Nombres</th>
            <th>Email</th>
            <th>DNI</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cli, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{cli.apellidos}</td>
              <td>{cli.nombre}</td>
              <td>{cli.email}</td>
              <td>{cli.dni}</td>
              <td>{cli.telefono}</td>
              <td>
                    <Link className="btn btn-warning btn-sm" to={`/editarcliente/${cli.id}`}>
{/* se agrego */}
                    <i class="fas fa-edit"></i>
                        </Link>
              <Link className="btn btn-danger btn-sm" to="" onClick={() => eliminar(cli.id)}><i class="fas fa-trash-alt"></i></Link>
                          
              </td>
            

            </tr>
          ))}
        </tbody>
      </table>

        </div>
    )
}

export default ListaClientes