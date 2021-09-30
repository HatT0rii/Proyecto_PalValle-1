import React, {useState, useEffect} from 'react'
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


function GroupCategories({ 
  productos, 
  categoria, 
  id_categoria, 
  mostrarFiltro, 
  setProductos}) {

    const [checkboxFiltro, setCheckboxFiltro] = useState(false);
    const [filtroNombre, setFiltroNombre] = useState("")

    const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })((props) => <Checkbox color="default" {...props} />);

      const [state, setState] = React.useState({
        checked: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const [productosOriginal] = useState(productos)

    useEffect(() => {
        let productosFiltrados = productosOriginal.filter((prod)=>{
          return prod.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
        })
        setProductos(productosFiltrados)  
      },[filtroNombre])

    return (
        <div>
            <div>
        <h2 className="my-3 fw-bold">{categoria}</h2>
      </div>
      {mostrarFiltro ? (
        <div>
          <button className="btn btn-outline-dark btn-sm" onClick={() => {setCheckboxFiltro(!checkboxFiltro);}}>
            <i className="fas fa-funnel-dollar me-1"></i>   Filtros
          </button>
          {checkboxFiltro ? (
            <div className="row p-3">
              <div className="col-12 col-lg-6">
                    <label>Selecciona la categoria</label>

                    <FormControlLabel
                        control={<GreenCheckbox
                        checked={state.checkedG} 
                        value={filtroNombre}
                        onChange={(e) => {setFiltroNombre(e.target.value)}} 
                        name="checkedG"/>}
                        label="Custom color"
                    />
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
        </div>
    )
}

export default GroupCategories
