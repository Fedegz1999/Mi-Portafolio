import React from 'react'
import './Avatar.css'
import Mate from '../Media/mate.png'
import Viaje from '../Media/viaje.png'
import Avion from '../Media/avion.png'
import Mifoto from '../Media/mifoto.jpg'

function Avatar(): JSX.Element {
  return (
    <>
      <h1 className="fed">Front-end Developer & Digital Designer</h1>
      <h4 className="nombre">Me gusta crear, diseñar y aprender todos los días</h4>
    <div className='containerYo'>

      <div className='ft'>
    <div className='foto'>
    <div className='container'>
        <div className="avatar">
			<img src={Mifoto} alt="Skytsunami" />
      </div>
	</div>
  <br></br>
  <h1>Federico Gutierrez</h1>
  <br></br>
  <div className="linea"></div>
  </div>
  <div className='cel'>
  <h1 className='sobreyo'>Sobre Mí</h1>
      <h5 className='textito'>¡Hola! me llamo Federico y vivo en Argentina. Soy un desarrollador front-end con habilidades tanto en diseño como en programación. Me apasiona el aprendizaje continuo y siempre estoy buscando nuevas tecnologías y conceptos para mejorar mi conocimiento y habilidades.
Me considero una persona resolutiva y extrovertida, lo que me permite trabajar de manera eficiente bajo presión y en situaciones que requieren toma de decisiones rápidas. Estoy emocionado por seguir aprendiendo y creciendo como desarrollador y colaborar en proyectos desafiantes y emocionantes. </h5>
</div>
<div className='icons'>
<div className='mate'>
<div className="avatar2">
			<img src={Mate} alt="Skytsunami" />
      </div>
        </div>
        <div className='viaje'>
<div className="avatar3">
			<img src={Viaje} alt="Skytsunami" />
      </div>
        </div>
        <div className='avioncito'>
      <div className="avatar4">
			<img src={Avion} alt="Skytsunami" />
      </div>
      </div>
      </div>
        </div>
        </div>
        </>
  )
}

export default Avatar


