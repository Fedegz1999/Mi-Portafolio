import { Button } from '@mui/material'
import React from 'react'
import './CardsProyectos.css'
import TheCornerMovies from '../Media/thecornermovies.png'
import Juegos from '../Media/juego.png'
import Planeta from '../Media/planeta.png'
import { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Figure from 'react-bootstrap/Figure';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import GitHubIcon from '@mui/icons-material/GitHub';

const info = [{
id:1,
nombre: "The Corner Movies",
desc: "Página realizada en conjunto sobre la creación de reseñas de diferentes películas.Entre tantas funcionalidades se puede seguir usuarios, crear listas, suscribirse a un plan y más.",
informacion: "Esto de una buena info",
img: TheCornerMovies,
repo: "https://github.com/FelipeSiravegna/ProyectoGrupal-Frontend",
deploy: "https://thecornermovies.vercel.app/",
detalle: "Pagina de peliculas con implementación de React, Redux, CSS, Bootstrap y Material-UI.  Se trabajó desde el lado del front-end para la interfaz del cliente utilizando las diferentes tecnologías incluyendo filtrados, búsquedas, ordenamiento, creación de listas, personalización de perfil, paginado, entre otros.Pagina de peliculas con implementación de React, Redux, CSS, Bootstrap y Material-UI. Se trabajó desde el lado del front-end para la interfaz del cliente utilizando las diferentes tecnologías incluyendo filtrados, búsquedas, ordenamiento, creación de listas, personalización de perfil, paginado, entre otros. Aptitudes: JavaScript · React.js · Redux.js · Node.js · Express.js · Sequelize.js · Bootstrap · Material-UI"
},
{
id:2,
nombre: "App Videogames",
desc: "Página realizada individualmente con temática orientada en videojuegos. Se puede ver los detalles, crear videojuegos, filtrarlos y más.",
informacion: "Esto de una buena info2",
img: Juegos,
repo: "https://github.com/Fedegz1999/App-de-Videojuegos",
detalle: "•	Página de videojuegos. Implementación de base de datos con PostgresSQL y Sequelize en el lado Back-end. También implementé Redux, React y CSS en el lado del Front-end. Se diseñó y desarrolló una App de Videojuegos que incluía : búsquedas, filtrados, ordenación y creación de videojuegos. •	Aptitudes: JavaScript · React.js · Redux.js · Node.js · Express.js · Sequelize.js"
},
{
id:3,
nombre: "App Countries",
desc: "Página realizada individualmente con temática orientada en videojuegos. Se puede ver los detalles, crear videojuegos, filtrarlos y más.",
informacion: "Estoa de una buena info2",
img: Planeta,
repo: "https://github.com/Fedegz1999/pi-individual",
detalle: "•	Página de países Implementación de base de datos con PostgresSQL y Sequelize en el lado Back-end. También implementé Redux, React y CSS en el lado del Front-end. Se diseñó y desarrolló una App de países que incluía : búsquedas, filtrados, ordenación y creación de actividades.  •	Aptitudes: JavaScript · React.js · Redux.js · Node.js · Express.js · Sequelize.js"
},

]




function CardsProyectos(): JSX.Element {

    const [show, setShow] = useState<any>(false);

    const handleClose = () => setShow(false);
    
    const handleShow = (e: any) => {
      let resultado = info.filter(a => a.id === e)
      let app = resultado.map(a=> a.nombre)
      let infor = resultado.map(a=> a.detalle)
      let repositorio = resultado.map(a=> a.repo)
      let deployado = resultado.map(a=> a.deploy? a.deploy : null) 
      let deploi = deployado[0] !== null
      if(deploi === true){
      setShow({app, infor, repositorio,deployado});
      }else{
      setShow({app, infor, repositorio});
      }
    }

  
  
  return (
    
      <div><h1 className='title2'>Mis Proyectos</h1>
    <div className='proyect'>

    {info.map(a=> {return(   
    <div key={a.id} className='body'>
<div className='card'>
    <div className='circle'></div>
    <div className='content'>
        <h2>{a.nombre}</h2>
        <p>{a.desc}</p>
       
<Button variant='outlined' color='neutral' onClick={()=>handleShow(a.id)}>más información</Button>

    </div>
<img className='TCM' src={a.img}></img>
</div>
        </div>
)})}


      <Modal  className='modal' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{show.app}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='body'><p className='infor'>{show.infor}</p></Modal.Body>
        <Modal.Body className='fotos'>
        <a className='link' href={show.repositorio} target="_blank">
            <div className='btn'>
              <div className='icono'><i><GitHubIcon fontSize='large'/></i></div>
              <span className='s'>Repositorio</span>
            </div>
              </a>

              
              {show.deployado ? 
            <a className='link' href={show.deployado} target="_blank">
            <div className='btn'>
              <div className='icono'><i><WebAssetIcon fontSize='large'/></i></div>
              <span className='s'>Deploy</span>
            </div>
            </a>
            : null}
            
              
              </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>      

         </div>
         </div>
  )
}

export default CardsProyectos