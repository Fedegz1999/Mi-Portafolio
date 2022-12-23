import React from 'react'
import CardsProyectos from '../CardsProyectos/CardsProyectos'
import Emails from '../Emails/Emails'
import Tecnologias from '../Tecnologias/Tecnologias'
import './Divisor.css'


function Divisor(): JSX.Element {
  return (
    <div>
      
    <div className='divisor'>
         <div className='div1'></div>
    <div className='div2'></div>
    <div className='div3'> <Tecnologias/> </div>
    <div className='div4'> <CardsProyectos/> </div>
    <div className='div5'><Emails/></div>
         </div>
         
        
         </div>
    
  )
}

export default Divisor