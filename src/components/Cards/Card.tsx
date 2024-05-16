import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';


export const Card = () => {
    return (
        <>
            <div className={`mb-20 flex justify-center  ml-7 ${"flex-row"}`}>
                <div  >
                    <img className="md:w-[500px] md:h-[300px] card hover:filter-none transition duration-1000  h-[350px] w-[300px]  absolute rounded-md md:rounded-none  md:relative mt-8 "
                       alt='https://wpdirecto.com/wp-content/uploads/2017/08/alt-de-una-imagen.png' 
                       src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"></img>
                </div>

                <div className="md:mt-7" data-aos="fade-right" data-aos-duration="1000">
                    <h1 className="text-center text-white w-full  flex justify-center ml-7 md:ml-0 md:px-0  md:w-[460px] md:text-2xl text-xl">APLICACIÓN DE FUTBOL</h1>
                    <div className=" absolute" >
                        <p className={`text-md noise2 border-[1px] border-neutral-500 ${"md:-ml-10"} text-start md:bg-neutral-300 md:w-[500px] max-h-[350px] overflow-scroll md:overflow-hidden w-[300px] p-5 justify-start md:text-start  text-neutral-100 md:text-gray-800 rounded-md`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium possimus consequatur neque,
                            non culpa ipsum sunt maxime adipisci dolorem veritatis nam, nisi libero ut placeat et dolore quis dolorum.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi cupiditate, ipsa maxime sequi consectetur dolores ipsum cumque,
                            quis voluptatibus id iure placeat ex temporibus ullam, ut pariatur neque cum?</p>
                        <p className="px-2 text-xs font-mono font-semibold md:w-full w-[300px] text-white  text-center   mt-1">React   Taildwind.css   Redux   Bootstrap   Material UI   Firebase</p>
                    </div>
                </div>

<div className='flex items-center md:mt-0 mt-[50%] '>
    <div className='flex-col md:ml-5 ml-14'>
                <p className=" border-[0.1px] border-white h-max cursor-pointer rounded-full p-2 hover:bg-slate-200"><GitHubIcon color='inherit' /></p>
                <p className=" border-[0.1px] border-white h-max cursor-pointer rounded-full p-2 hover:bg-slate-200"><LaunchIcon color='inherit' /></p>
                </div>
                </div>
            </div>
        </>
    )
}