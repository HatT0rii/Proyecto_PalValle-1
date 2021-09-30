import React from 'react'

function FormVenta({
    value,
    setValue,
    actualizarInput,
    cliente
}) {
    return (
        <div>
         <form>
        <div className="row">
            <div class="col-md-6 mb-3">
            <label className="form-label text-danger">
                    Nro. Venta
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={value.id}
                    onChange={(e)=>{actualizarInput(e)}} />
            </div>
            <div class="col-md-6 mb-3">
                <label className="form-label text-danger">
                        Fecha
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={new Date(value.fecha).toLocaleDateString('en-GB')} 
                        onChange={(e)=>{actualizarInput(e)}} 
                        />
            </div>

        </div>

          <div className="row">
          <div class="col-md-12 mb-3">
                <label className="form-label text-danger">
                        Cliente
                    </label>  
                    <input 
                        type="text" 
                        className="form-control" 
                        value={`${cliente.apellidos} , ${cliente.nombre}`}
                        onChange={(e)=>{actualizarInput(e)}} 
                        />
            </div>
          </div> 

          <div className="row">
          <div class="col-md-6 mb-3">
            <label className="form-label">
                Precio Total
            </label>           
            <input 
                type="number" 
                className="form-control text-danger" 
                value={value.precio_total}
                onChange={(e)=>{actualizarInput(e)}} 
                />
            </div>
            <div class="col-md-6 mb-3">
            <label className="form-label text-danger">
                Estado
            </label>           
            <input 
                type="text" 
                className="form-control" 
                value={value.estado}
                onChange={(e)=>{actualizarInput(e)}} 
                />
            </div>
           


          </div>

            
         </form>
            
        </div>
    )
}

export default FormVenta
