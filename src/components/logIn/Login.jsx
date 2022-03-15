import React, { useState, useRef, useEffect } from 'react'
import { Navigate} from 'react-router-dom'
import { WeatherConsumer } from '../../context/WeatherProvider'
import Swal from 'sweetalert2'
import './logIn.css'

function Login() {
  const { setUserName } = WeatherConsumer()
  const start = useRef()
  const [go, setGo] = useState(false)
  const name = localStorage.getItem('weatherAppName')
  
  useEffect(() => {
    start.current.click()
  }, [])

  const handleSumbitName = (e) => {
    e.preventDefault();
    if (e.target[0].value === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    } else {
      console.log(e)
      setGo(true)
      localStorage.setItem('weatherAppName', e.target[0].value)
      setUserName(e.target[0].value)
    }
 
  }
  return (
    <div className='main'>
      <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" ref={start}>Search for weather</button>
      {name !== 'null' && <Navigate replace to='/home'></Navigate>}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Nos permitis utilizar tu ubicacion para ver el clima?</h5>
            </div>
            <div className="modal-body">
              <form onSubmit={(e)=> handleSumbitName(e)}>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">Como te dicen?</label>
                  <input type="text"  className="form-control"/>
                </div>
              
                <button type="submit" className="btn btn-primary">Done!</button>
                
              </form>
            </div>
          </div>
        </div>
      </div>
      {go && <Navigate replace to='/home' ></Navigate>}
    </div>
  )
}

export default Login