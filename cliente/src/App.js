
import React from 'react'
import {Switch, BrowserRouter as Router} from "react-router-dom"
import CarritoContextProvider from "./context/carritoContext";
import Navbar from "./components/Navbar"
import Routes from "./Routes"

function App() {

  return (
    <Router>
      <CarritoContextProvider>
        <Navbar/>
        <Switch>
            <Routes />
          </Switch>
      </CarritoContextProvider>
    </Router>
  )
}

export default App



