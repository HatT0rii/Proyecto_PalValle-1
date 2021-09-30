import React from "react";

function FormCategoria({
    
  value, 
  actualizarInput,
  setValue, 
  manejarSubmit}) {
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
            name = "nombre"
            value={value.nombre}
            onChange={(e)=>{actualizarInput(e)}}
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">
            Descripción
          </label>
          <input 
            type="text" 
            className="form-control" 
             name = "descripcion"
            value={value.descripcion}
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
  );
}

export default FormCategoria;
