import React from 'react'
import './restOfDays.css'
import moment from 'moment';

function RestOfDays({future}) {
  const date = new Date();
  const indexDays = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']


  const date1 = date.getDate() + 1;
  const date2 = date.getDate() + 2;
  const date3 = date.getDate() + 3;
  const date4 = date.getDate() + 4;

  const date1Day = date.getDay() + 1;
  const date2Day = date.getDay() + 2;
  const date3Day = date.getDay() + 3;
  const date4Day = date.getDay() + 4;

  const auxDate = 
  [ { day: date1, name: indexDays[date1Day], tempMax: [], tempMin: [] } ,
    { day: date2, name: indexDays[date2Day], tempMax: [], tempMin: [] } ,
    { day: date3, name: indexDays[date3Day], tempMax: [], tempMin: [] } ,
    { day: date4, name: indexDays[date4Day], tempMax: [], tempMin: [] } ]
 

  future.list.forEach(element => {
    const aux = parseInt(moment(element.dt_txt).format('DD'))
    
    if ( aux === auxDate[0].day ){
      auxDate[0].tempMax.push(element.main.temp_max)
      auxDate[0].tempMin.push(element.main.temp_min)
    }
    if ( aux === auxDate[1].day ){
      auxDate[1].tempMax.push(element.main.temp_max)
      auxDate[1].tempMin.push(element.main.temp_min)
    }
    if ( aux === auxDate[2].day ){
      auxDate[2].tempMax.push(element.main.temp_max)
      auxDate[2].tempMin.push(element.main.temp_min)

    }
    if ( aux === auxDate[3].day ){
      auxDate[3].tempMax.push(element.main.temp_max)
      auxDate[3].tempMin.push(element.main.temp_min)
    }
  });

  function calculate(array) {
    var i = 0, sum = 0, len = array.length;
    while (i < len) {
        sum = sum + array[i++];
    }
    return sum / len;
  }


  return (<>
    <div className='d-flex border-bottom'>
      <div className='col-3'>
        <p>
          <b>Dia</b>
        </p>
      </div>

      <div className='col-3'>
        <p></p>
      </div>

      <div className='col-2'>
        <b>Min</b>
      </div>

      <div className='col-2 my-auto'>
        <div className='rangeAux'></div>
      </div>

      <div className='col-2'>
        <p>
          <b>Max</b>
        </p>
      </div>
      
    </div>
      
      {auxDate.map((element, id) => {
        return (
          <div key={id} className='rounded-xl'>
            {element.tempMax.length > 0 && (<>
                                            <div className='col-3 '><p>{element.name}</p></div>
                                            <div className='col-3 '><p>{element.day}</p></div>
                                            <div className='col-2 '>{Number((calculate(element.tempMin) - 273.15).toFixed(0))}º </div>
                                            <div className='col-2 my-auto'>
                                              <div className='rangeAux'>
                                              </div>
                                            </div>
                                            <div className='col-2'>{Number((calculate(element.tempMax) - 273.15).toFixed(0))}º </div>
                                          </>)}
          </div>)})}
      </>
  )
}

export default RestOfDays