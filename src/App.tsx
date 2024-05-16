import { Info } from "./components/Info";
import { Header } from "./components/Header";
import { Presentacion } from "./components/Presentacion";
import "./App.css"
import { AboutMe } from "./components/AboutMe";
import { useEffect } from "react";
import AOS from 'aos';
import { Projects } from "./components/Projects";

function App(): JSX.Element {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div className="bg-noise">
      <div className="lg:h-[65vh] h-[40vh]  border-b-[1px] border-white  ">
        <Header />
        <Presentacion />
      </div>
      <div className=" pb-5 rounded-r-[95%] d border-r-white border-r-[1px]">
        <Info />
        <AboutMe />
      </div>
      <div className="border-t-[1px] h-max pb-5 border-white border-e  rounded-se-xl">
        <Projects />
      </div>
      </div>
    </>
  );
}

export default App;
//bg-[#eff8fd]