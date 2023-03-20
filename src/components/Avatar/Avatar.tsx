import React from 'react'
import './Avatar.css'
import Mate from '../Media/mate.png'
import Viaje from '../Media/viaje.png'
import Avion from '../Media/avion.png'
import Mifoto from '../Media/mifoto.jpg'

function Avatar(): JSX.Element {
  return (
    
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
      <h5 className='textito'>Me llamo Federico, soy de Argentina y tengo 23 años.
Estudié en la universidad comunicación social con orientación audiovisual durante 3 años, me interese por el diseño digital. Ese camino me llevo al desarrollo web y un día decidí realizar un bootcamp de programación.
Hoy ya finalizado ese proceso, con un hermoso camino recorrido, muchos conocimientos y con muchas ganas de seguir en este mundo de la tecnología.
Gracias a los distintas habilidades obtenidas en mis diversos estudios y mi corta pero valiosa experiencia, soy capaz de desenvolverme rápidamente en el ámbito. Siempre estoy en busca de nuevos retos y intentando aprender conceptos nuevos día a día. </h5>
</div>
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
  )
}

export default Avatar


