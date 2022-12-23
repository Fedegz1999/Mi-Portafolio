import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from '@mui/material';
import { useRef } from 'react';

function Navbarr(): JSX.Element {

  const ref = useRef(null)

  const toTheTop = (sitio:string) => {
    if(sitio === 'sobremi'){
    window.scrollTo({top: 600, behavior: "smooth" });
    }
    if(sitio === 'tecnologias'){
      window.scrollTo({top: 1100, behavior: "smooth" });
      }
    if(sitio === 'proyectos'){
      window.scrollTo({top: 1900, behavior: "smooth" });
      }
      if(sitio === 'contacto'){
        window.scrollTo({top: 15000, behavior: "smooth" });
        }
}

  return (
    <div>
<Navbar variant='none'>
        <Container>
          <Navbar.Brand >Federico Gutierrez</Navbar.Brand>
          <Nav className="justify-content-end">
            <Button onClick={(e)=>toTheTop('sobremi')} color='error'>SOBRE MÍ</Button>
            <Button onClick={(e)=>toTheTop('tecnologias')} color='error'>TECNOLOGÍAS</Button>
            <Button onClick={(e)=>toTheTop('proyectos')} color='error'>PROYECTOS</Button>
            <Button onClick={(e)=>toTheTop('contacto')} color='error'>CONTACTO</Button>
          </Nav>
        </Container>
      </Navbar>
            <div className="linea"></div>
    </div>
  )
}

export default Navbarr