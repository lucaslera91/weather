import React, { useState, useEffect } from 'react'
import Clock from '../clock/ClockComponent'
import RestOfDays from '../restOfDays/RestOfDays'
import Today from '../today/Today'
import './generalContainer.css'
import { WeatherConsumer } from '../../context/WeatherProvider'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import AuthError from '../AuthError'



function GeneralContainerStart() {

  const { weatherData, weatherDataFutre, noAuth} = WeatherConsumer()
  
  const dayIndex = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
  const monthIndex = {0: 'Ene', 1:'Feb', 2:'Mar', 3:'Abr', 4:'May', 5:'Jun', 6:'Jul', 7:'Ago', 8:'Sep', 9:'Oct', 10:'Nov', 11: 'Dic'}
  
  const [day] = useState(new Date())
  const [dia] = useState(day.getDate())
  const [mes] = useState(day.getMonth())

  const [userName] = useState(localStorage.getItem('weatherAppName'))
  const [nombreDia] = useState(day.getDay())

  const aux = monthIndex[mes]
  const auxWeek = dayIndex[nombreDia]
  
  const diaPantalla = auxWeek + ' ' + dia + ' de ' + aux

  useEffect(() => {
    Swal.fire({
      icon: 'info',
      title: `Hola ${userName}`,
      showConfirmButton: false,
      timer: 1000
    })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(<>
  {noAuth !== '' && (<AuthError user={userName} noAuth={noAuth}/>)}
  {!userName && <Navigate replace to='/'></Navigate>}
  {userName === null && <Navigate replace to='/'></Navigate>}

  {Object.keys(weatherData).length === 0 && Object.keys(weatherDataFutre).length === 0 && 
      <h4 className='wait'>
        <div className="spinner-grow spinner-grow text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </h4>
  }
  {Object.keys(weatherData).length !== 0 && Object.keys(weatherDataFutre).length !== 0 && (
                  <div className='main-div p-2'>
                        <div className='top-titles card'>
                            <p className='my-auto mt-1 display-3'>{weatherData.name}</p>
                            <div className='fecha'>
                              <p className='display-6'>{diaPantalla}</p>
                              <div className='clock'><Clock/></div>
                            </div>
                            <p className='display-1'>{ Number((weatherData.main.temp - 273.15).toFixed(0)) }</p>
                            <p className='my-auto mt-1'>Max: {Number((weatherData.main.temp_max - 273.15).toFixed(0)) }</p>
                            <p className='my-auto mt-1'>Min: {Number((weatherData.main.temp_min - 273.15).toFixed(0)) }</p>
                        </div>
                        <div className='today'>
                          <Today todayInfo={weatherData} weatherFuture={ weatherDataFutre }></Today>
                        </div>
                        <div className="accordion">
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button 
                                className="accordion-button" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#collapseOne" 
                                aria-expanded="true" 
                                aria-controls="collapseOne">
                                Proximos 4 dias
                              </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                              <div className="accordion-body">
                                <ul className="list-group list-group-flush">
                                      <RestOfDays future={weatherDataFutre}/>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
  )}
  </>)
}



export default GeneralContainerStart