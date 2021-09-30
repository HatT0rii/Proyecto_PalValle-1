import React from 'react'
import Routes from "./Routes"
import {BrowserRouter as Router, Switch} from "react-router-dom"
import Layout from "./components/Layout"
import NavigationBar from "./components/NavegationBar"  
import "./estilos.css";
function App () {

return(
  <>
  
 <NavigationBar/> 
   <Layout> 
   
    <Router>
         <Switch>
        <Routes/>
      </Switch>
    </Router>
     </Layout>  

    </>
  )
} 

export default App
