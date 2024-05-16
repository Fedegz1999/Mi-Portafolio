import BrushIcon from '@mui/icons-material/Brush';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const Info = () => {
    return (
      <div className='flex justify-center'>
        <div className='flex flex-col lg:flex-row  md:px-0 px-2' >
          
<div className='text-center'>
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
           <SchoolIcon sx={{ fontSize: 60 }}/>
            </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Profesor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Actualmente me desempeño como profesor y tutor en distintas areas de la programación.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='text-center' >
<Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia>
           <BrushIcon sx={{ fontSize: 60 }}/>
            </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Diseñador
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estudie diseño digital y diseño grafico, lo que me da un plus en la mirada para una interface web.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

    <div className='text-center' >
<Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia>
            <CodeIcon sx={{ fontSize: 60 }}/>
            </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Programador Web
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Soy desarrollador web y creo paginas responsivas y creativas.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
        </div>
        </div>
    )
}