import React from 'react'
import './todayTemp.css'
import moment from 'moment'

function TodayTemperature({today, temps}) {

    const map1 = new Map();

    map1.set('Clear', 'fas fa-sun')
    map1.set('Clouds', 'fa-solid fa-cloud')
    map1.set('Rain', 'fa-solid fa-cloud-showers-heavy')
    map1.set('other', 'fa-solid fa-cloud-sun-rain')
    

  return (<>
  {!temps && <h1>Cargando...</h1>}
    {temps && <div className='w-100 card my-2 p-2'>

        <div className='rounded'>
            <table>
                <thead>
                    <tr>
                    {temps.list.map((item, id) => {
                        return(
                            <td key={id}> 
                                <p>{moment(item.dt_txt).format('HH')}</p>
                            </td>
                        )
                    })}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {temps.list.map((item, id) => {
                        return(
                            <th key={id}> 
                                <i className={map1.get(item.weather[0].main)}></i>
                            </th>
                        )
                    })}
                    </tr>
                    <tr>
                    {temps.list.map((item, id) => {
                        return(
                            <td key={id}> 
                                <p>{(item.main.temp - 273.15).toFixed(0)}</p>
                            </td>
                        )
                    })}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>}
    </>)
}

export default TodayTemperature