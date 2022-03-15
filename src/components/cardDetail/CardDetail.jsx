import React from 'react'
import './cardDetail.css'
import moment from 'moment'

function CardDetail({titulo, icon, unidad, time, dato, dir}) {
  const day1 = new Date(time * 1000)
  return (
    <div className='m-1'>
        <div className="contenedor">
          <div className="card-item">
              <div className="card-body p-2">
                  <h6 className="card-title">{titulo}</h6>
                  <div className='icons'>
                    {unidad === 'hPa' && <div className='inputPressure'>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: `${dato/2*100}%`}} aria-valuenow={dato} aria-valuemin={0} aria-valuemax={2}></div>
                    </div>
                    
                    <div className='lines'>
                      <span className='pr1'>bajo</span>
                      <span className='pr2'></span>
                      <span className='pr1'>alto</span>
                    </div>
                    </div>}
                    {dir && <div className='compas'>
                            <div className='d-flex flex-column align-items-center'>
                              <div>N</div>
                              <i className="fas fa-long-arrow-alt-up fa-2x"></i>
                            </div>
                            <div 
                              className='wind' 
                              style={{transform: `rotate(${-dir + 90}deg)`}}>
                                <i className="fas fa-long-arrow-alt-up fa-2x"></i>
                            </div>
                          </div>}
                    {icon}
                  </div>
                  {time && <p className="card-text">{moment(day1).format('HH:MM')}</p>}
                  {dato && <p className="card-text">{dato} {unidad}</p>}
              </div>
          </div>
        </div>
    </div>
  )
}

export default CardDetail