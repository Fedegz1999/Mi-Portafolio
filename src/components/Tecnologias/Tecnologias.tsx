import React from 'react'
import './Tecnologias.css'
import react from '../Media/react.png'
import redux from '../Media/redux.png'
import css from '../Media/css.png'
import html from '../Media/html.png'
import js from '../Media/js.png'
import bootstrap from '../Media/bootstrap.png'
import materialui from '../Media/materialui.png'
import node from '../Media/node.png'
import typeS from '../Media/type.png'
import git from '../Media/git.png'
import postg from '../Media/postg.png'




function Tecnologias(): JSX.Element {
  return (
    <div>
        <h1 className='title'>Tecnologías</h1>
    <div className='contenedor'>
    <div className='tecnologias'>
    <abbr title='React'><img className='skill' id='react' src={react}></img></abbr>
    <abbr title='Redux'><img className='skill' src={redux}></img></abbr>
    <abbr title='CSS'><img className='skill' src={css}></img></abbr>
    <abbr title='HTML'><img className='skill' src={html}></img></abbr>
    <abbr title='JavaScript'><img className='skill' src={js}></img></abbr>
    <abbr title='Bootstrap'><img className='skill' src={bootstrap}></img></abbr>
    <abbr title='Material UI'><img className='skill' src={materialui}></img></abbr>
    <abbr title='Node js'><img className='skill' src={node}></img></abbr>
    <abbr title='TypeScript'><img className='skill' src={typeS}></img></abbr>
    <abbr title='GitHub'><img className='skill' src={git}></img></abbr>
    <abbr title='PostgreSQL'><img className='skill' src={postg}></img></abbr>
        </div>
        </div>
        </div>
  )
}

export default Tecnologias