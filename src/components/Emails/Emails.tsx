import React from 'react'
import emailjs  from '@emailjs/browser'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import './Emails.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
//import cv from '../../cv.pdf'
import { useState } from 'react'

function Emails(): JSX.Element {


  const [show, setShow] = useState<any>(false);


    const sendEmail = (event: any) => {
        event.preventDefault(); 
        emailjs.sendForm('service_fcc3w5g','template_timob24',event.target,'YiicBY5YcoRtUxbJJ')
        .then(response => console.log(response))
        .catch(error => console.log(error))
      }
    
      const enviado = () => {     
        setShow(true)
      }

      return (
        <div className='general'>
            <h1 className='title2'>Contacto</h1>

        <div className='div-form'>
          
          <form className='form-mail' onSubmit={sendEmail}>
            
            <TextField type="text" className='bd_textarea' label="Nombre" variant="filled" color="warning" focused name='user_name'/>
            <hr />
            <TextField type="email"  className='bd_textarea' label="Email" variant="filled" color="warning" focused name='user_email'/>
            <hr />
    
            
            <TextField
    className="bd_textarea"
    id={ `tt_description_text outlined-multiline-static`}
    label="Mensaje"
    multiline
    rows={5}
    variant='filled'
    color='warning'
    name="user_message"
    focused
/>
            <hr />
            {!show ?
            <button className='boton' onClick={enviado}>Enviar</button>
            : <button disabled className='boton2'>Enviado</button>}
          </form>

          </div>


          <div className='contenedor2'>
<a className='link' href='https://github.com/Fedegz1999' target="_blank">
            <div className='btn'>
              <div className='icono'><i><GitHubIcon fontSize='large'/></i></div>
              <span className='s'>Fedegz1999</span>
            </div>
              </a>

              <a href='https://www.linkedin.com/in/fede-gutierrez-1362a3233/' target="_blank">
            <div className='btn'>
              <div className='icono'><i><LinkedInIcon color='secondary' fontSize='large'/></i></div>
              <span className='s'>Fede Gutierrez</span>
            </div>
            </a>

            <a download='CV Federico Gutierrez' href="../../cv.pdf">
            <div className='btn'>
              <div className='icono'><i><DownloadIcon color='primary' fontSize='large'/></i></div>
              <span className='s'>Descargar CV</span>
            </div>
            </a>


            
            
            
</div>

        </div>
      )
    }

export default Emails