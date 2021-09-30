import React from 'react'

function FormCliente({
    value,
    actualizarInput, 
  setValue, 
  manejarSubmit
}) {
    return (
        <div>
      <form onSubmit={(e) => {manejarSubmit(e)}}>
        <div className="mb-3">
          <label className="form-label">
            Nombre 
          </label>
          <input 
            type="text" 
            className="form-control" 
            name = "Nombres"
            value={value.nombre}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">
          Apellidos
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "Apellidos"
            value={value.apellidos}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
          Email
          </label>
          <input 
            type="email" 
            className="form-control" 
             name = "email"
            value={value.email}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          DNI
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "dni"
            value={value.dni}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
          Telefono
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "telefono"
            value={value.telefono}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
          Dirección
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "direccion"
            value={value.direccion}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary btn-md" type="submit">
            Guardar
          </button>
        </div>
      </form>
    </div>
  
    )
}

export default FormCliente
