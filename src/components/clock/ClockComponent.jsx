import React from 'react'
import Clock from 'react-live-clock'
import './clock.css'

function ClockComponent() {
  return (
    <div >
      <Clock className='clock-div' format={'HH:mm'} ticking={true}/>
    </div>
  )
}

export default ClockComponent