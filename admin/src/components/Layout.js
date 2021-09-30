import React from 'react'
import {Container} from 'react-bootstrap'

const Layout = (props) => {
    return (
        <Container>
        {/* para mostrar opciones del route */}
            {props.children}
        </Container>
    )
}

export default Layout
