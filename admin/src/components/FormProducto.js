import React, {useRef} from 'react'
import {subirArchivo} from '../services/productoService'


let imagenes;

const asyncForEach = async(array, callback) =>{
  console.log(array);
  for (let i = 0; i < array.length; i++) {
      await callback(array[i])
  }
}


function FormProducto({
 value, 
 actualizarInput, 
 setValue, 
 manejarSubmit, 
 categorias}) {
    
    const inputFotos = useRef()

    const ejecutarSubmit = async(e) =>{
        e.preventDefault()
        let urls= []
        await asyncForEach(imagenes, async(imagen) =>{
          let urlImagenSubida = await subirArchivo(imagen)
          urls.push(urlImagenSubida)
        })
          manejarSubmit(e, urls)
      }
 
      const manejarImagen = (e) =>{
        e.preventDefault();
        let misImagenes = e.target.files
        imagenes=misImagenes
      }
 
      return (
        <div>
          <form onSubmit= {(e) =>{ejecutarSubmit(e)}  }>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" placeholder="Nombre" 
              className="form-control" name="nombre" value ={value.nombre}
              onChange={(e) => {actualizarInput(e)} }
               />
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <input
                type="text"
                placeholder="Descripción"
                className="form-control"
                name="descripcion"
                value ={value.descripcion}
              onChange={(e) => {actualizarInput(e)} }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Precio</label>
              <input type="number" className="form-control" name="precio"
                value ={value.precio}
              onChange={(e) => {actualizarInput(e)} }
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input type="number" className="form-control" name="stock"
              value ={value.stock}
              onChange={(e) => {actualizarInput(e)} } />
            </div>
        <div className="mb-3">
          <label className="form-label">Fotos</label>
          <input 
            type="file"
            ref={inputFotos}
            className="form-control"
            onChange={(e)=>{manejarImagen(e)}}
            multiple
          />
          <ul className="list-group">
          <li className="list-group-item">{value.foto}</li>

             {/*  {value.foto.map((fotito, i) => (
                <li className="list-group-item" key={i}>{fotito}</li>
              ))} */}
          </ul>
        </div>
        <div>
        <label className="form-label">Categoría</label>
        <select name="id_categoria"  
        className="form-control"
        value ={value.id_categoria}
        onChange={(e) => {actualizarInput(e)}}
        >
        {categorias.map((cat, i)=>(
                <option key={i} value={cat.id} >{cat.nombre}</option>
              ))}
        </select>
    
    </div>
    
        <div className="d-grid mt-3">
          <button type="submit" className="btn btn-primary">Guardar</button>
        </div>
          </form>
        </div>
      )

}

export default FormProducto