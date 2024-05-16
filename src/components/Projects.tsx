import { Card } from "./Cards/Card"

export const Projects = () => {
    return (
        <>
            <div className="pt-8 ">
                <div data-aos="fade-right">
                    <h1 className="lg:text-7xl text-4xl lg:mb-5 mb-5 font-thin lg:pl-24 pl-10 lg:w-full  text-bold text-black">Proyectos</h1>
                </div>
<div  className=" flex justify-center">
                <Card/>
                </div>

            </div>
        </>
    )
}