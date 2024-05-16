import { useState } from "react"


export const AboutMe = () => {

const [info, setInfo] = useState(true)



    return (
       <div className="pt-8">
        <div data-aos="fade-right">
        <h1 className="lg:text-7xl text-4xl lg:mb-5 mb-5 font-thin lg:pl-24 pl-10 lg:w-full  text-bold text-black">Sobre Mí</h1>
        <p className="font-serif md:text-xl text-start leading-8 ml-10 lg:ml-24 w-[80%]"><em>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cupiditate, veritatis ratione animi sed atque ipsa nemo consectetur
             quia mollitia alias fugiat, nostrum dignissimos debitis labore! Dolor perferendis libero veniam. Lorem ipsum dolor, 
             sit amet consectetur adipisicing elit. Architecto fuga iusto laborum, in, recusandae a repellendus ratione reiciendis dolorem corporis mollitia
              consequuntur? Voluptas, doloribus distinctio provident blanditiis beatae eos debitis?</em></p>
             </div>

<div>


</div>

<div className="mt-20" data-aos="fade-right">

             <h1 className="lg:text-7xl text-4xl lg:mb-5 mb-1 font-thin lg:pl-24 pl-10 lg:w-full  text-bold text-black flex gap-3 md:gap-6">{info ? "Experiencia" : "Educación"} <p onClick={()=>setInfo(!info)} className="hover:font-semibold duration-100 lg:text-2xl opacity-40 text-xl cursor-pointer flex items-end  font-thin">{info ? "Educación" : "Experiencia"}</p></h1>
<ol className="relative border-l border-gray-900 dark:border-gray-700 mt-10 ml-10 lg:ml-24">                  
<li className="mb-10 ml-4" data-aos="fade-down" >
    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 ml-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{info ? "Junio 2023" : "Junio - Noviembre 2022"}</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info ? "Coderhouse" : "Soy Henry" }</h3>
    <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-400">{info ? "Tutor de desarrollo back-end" : "Desarrollador full-stack"}</p>
    
</li>
<li className="mb-10 ml-4" data-aos="fade-down">
    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 ml-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{info ? "Mayo 2023" : "Enero - Marzo 2022"}</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info ? "Aprueba Xtreme" : "Politécnico de Colombia" }</h3>
    <p className="text-base font-normal text-gray-600 dark:text-gray-400">{info ? "Profesor de desarrollo front-end" : "Diseñador digital"}</p>
</li>
<li className="ml-4 mb-10" data-aos="fade-down">
    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 ml-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{info ? "Marzo - Mayo 2023" : "Febrero 2018 - Diciembre 2021"}</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info ? "WeTechn" : "Universidad de Entre Ríos"}</h3>
    <p className="text-base font-normal text-gray-600 dark:text-gray-400">{info ? "Desarrollador front-end" : "Tecnicatura en comunicación social"}</p>
</li>
<li className="ml-4 mb-10" data-aos="fade-down">
    <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
    <time className="mb-1 ml-2 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">{info ? "Febrero - Junio 2023" : "Marzo 2012 - Diciembre 2017"}</time>
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{info ? "DevoCamp" : "Esc. Claudio Lepratti"}</h3>
    <p className="text-base font-normal text-gray-600 dark:text-gray-400">{info ? "Desarrollador front-end" : "Bachiller en comunicación"}</p>
</li>


</ol>
</div>



</div>


    )
}