import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "../logIn/Login";
import GeneralContainerStart from "../generalContainer/GeneralContainerStart";
import Footer from "../footer/Footer";
import WeatherProvider from "../../context/WeatherProvider";


function Rutas() {
    
  return (
    <>
    <div className="App" 
      style={{backgroundImage: `url('https://services.meteored.com/img/article/cuantos-azules-tiene-el-cielo-289011-2.jpg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}}>
      <BrowserRouter>
        <WeatherProvider go={false}>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<GeneralContainerStart/>}/>
            </Routes>
        </WeatherProvider>
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default Rutas