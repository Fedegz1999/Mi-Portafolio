import { Button, ButtonGroup } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { grey, yellow } from "@mui/material/colors";

export const Header = () => {
    return (
        <>
            <div className=" h-max px-2 py-3 bg-transparent " >
                <header className="lg:flex lg:justify-between">

                <div className="flex justify-center lg:mb-0 mb-1 lg:ml-1">
                    <ButtonGroup variant="text" aria-label="outlined primary button group">
                        <Button sx={{ color: yellow[600] }}><LightModeIcon fontSize="small"/></Button>
                        <Button sx={{ color: grey[200] }}><DarkModeIcon fontSize="small" /></Button>
                    </ButtonGroup>
                    </div>
                

<div className="flex justify-center lg:justify-end lg:mr-14 items-center mx-1 ">
                    <Button variant="text" size='small' color="inherit">Sobre mí</Button>
                    <Button variant="text" size='small' color="inherit">Proyectos</Button>
                    <Button variant="text" size='small' color="inherit">Skills</Button>
                    <Button variant="text" size='small' color="inherit">Contacto</Button>
                    </div>
                
                
                
                </header>
            </div>
        </>
    )
}