import React from 'react'
import CardDetail from '../cardDetail/CardDetail'
import TodayTemperature from '../todayTemp/TodayTemperature'
import './today.css'

function Today({todayInfo, weatherFuture}) {
  return (
    <div className='main-today'>
        <div className='today-temp'>
           {todayInfo && weatherFuture && <TodayTemperature temps={weatherFuture} today={todayInfo}></TodayTemperature>}
        </div>
        <div className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id='heading0'>
              <button 
                className="accordion-button" 
                type="button" 
                data-toggle="collapse" 
                data-target="#collapse0" 
                aria-expanded="true" 
                aria-controls="collapseOne">
                Mas detalles de hoy
              </button>
            </h2>
            <div id="collapse0" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <div className='row' >
                        <div className='d-flex flex-wrap justify-content-center'>
                            
                            <CardDetail
                              titulo={'ATARDECER'}
                              time={todayInfo.sys.sunset} 
                              icon={<div className='d-flex flex-column align-items-center'>
                                    <i className="far fa-sun fa-2x"></i><i className="fas fa-angle-down fa-2x"></i>
                                    </div>}>
                            </CardDetail>
                            <CardDetail 
                              titulo={'VIENTO'} 
                              dato={todayInfo.wind.speed}
                              dir={todayInfo.wind.deg}
                              unidad={'km/h'} 
                              ></CardDetail>
                            <CardDetail 
                              titulo={'AMANECER'} 
                              time={todayInfo.sys.sunrise} 
                              icon={<div className='d-flex flex-column align-items-center'><i className="far fa-sun fa-2x"></i><i className="fas fa-angle-up fa-2x"></i></div>}>

                            </CardDetail>
                            <CardDetail 
                              titulo={'SENSACION TERMICA'} 
                              dato={Number((todayInfo.main.feels_like - 273.15).toFixed(0))}
                              unidad={'ºC'} 
                              icon={<i className="fas fa-thermometer-half fa-2x"></i>}>

                            </CardDetail>
                            <CardDetail 
                              titulo={'HUMEDAD'} 
                              dato={todayInfo.main.humidity} 
                              unidad={'%'} 
                              icon={<i className="fas fa-tint fa-3x"></i>}>

                            </CardDetail>
                            <CardDetail 
                              titulo={'VISIBILIDAD'} 
                              dato={todayInfo.visibility/1000} 
                              unidad={'km'} 
                              icon={<i className="fas fa-eye fa-3x"></i>}>

                            </CardDetail>
                            <CardDetail 
                              titulo={'PRESION'} 
                              dato={todayInfo.main.pressure/1000} 
                              unidad={'hPa'} >

                            </CardDetail>
                        </div>
                   
                    </div>
       
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Today