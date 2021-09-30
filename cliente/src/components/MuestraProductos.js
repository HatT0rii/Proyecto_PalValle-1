import React from 'react'
import {Link} from "react-router-dom"

function MuestraProductos({ productos, categoria, id_categoria }) {
  console.log(id_categoria)

  console.log(productos.fotos)
    return (
        <div className="container">
      <div>
        <h2 className="my-3 fw-bold">{categoria}</h2>
      </div>
      <div className="row">
        {productos
          .filter((prod) => {
            return prod.CategoriaId == id_categoria;
          })
        .map((prod, i) => (

          <div className="col-6 col-lg-3" key={i}>
              <Link 
                className="card mb-4" 
                to={`/detalle/${prod.id}`} 
                style={{textDecoration:'none', color:'black'}}
              >
                <img className="card-img-top" src={prod.foto} alt="" />
                <div className="card-body">
                  <h6 className="card-title">{prod.nombre}</h6>
                  <span className="fw-bold">S/ {prod.precio}</span>
                </div>
              </Link>
            </div>
      
        ))}
      </div>
    </div>
    )
}

export default MuestraProductos
