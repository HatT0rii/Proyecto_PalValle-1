import React from 'react'
import {Nav, NavDropdown, Navbar} from 'react-bootstrap'

function NavigationBar() {
  
    return (
        <>

  <Navbar collapseOnSelect expand="lg"className="color-nav" variant="light">
  <Navbar.Brand className="text-white font-weight-bold mx-5" href="/Home">PallValle</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/ListarVentas" className="text-white font-weight-bold">Ventas</Nav.Link>
 {/*      <Nav.Link className="text-white font-weight-bold" href="#features">Reporte</Nav.Link> */}
      <NavDropdown title="Mantenimiento"  id="collasible-nav-dropdown">
        <NavDropdown.Item  href="/ListaProductos">Productos</NavDropdown.Item>
        <NavDropdown.Item  href="/ListarCategoria">Categoria</NavDropdown.Item>
        <NavDropdown.Item  href="/ListaClientes">Clientes</NavDropdown.Item>
        </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>

  <Navbar.Collapse className="d-flex justify-content-end"> 
  <Nav>
      <Nav.Link className="text-white font-weight-bold"  href="/Login">Cerrar Sesión</Nav.Link>
       
    </Nav>
  </Navbar.Collapse>

</Navbar>
        </>
    )
}

export default NavigationBar