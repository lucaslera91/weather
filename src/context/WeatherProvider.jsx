/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {createContext, useContext, useState, useEffect} from 'react'
import {collection, addDoc} from 'firebase/firestore'
import db from '../service'
import * as helper from '../helper/index.js'
const WeatherContext = createContext()
export const WeatherConsumer = () => useContext(WeatherContext)

function WeatherProvider({children}) {

  const [weatherData, setWeatherData] = useState({})
  const [weatherDataFutre, setWeatherDataFutre] = useState({})
  const [dir, setDir] = useState({lon: 0, lat: 0})
  const urlWeatherToday = 'https://community-open-weather-map.p.rapidapi.com/weather'
  const urlWeatherForcast = 'https://community-open-weather-map.p.rapidapi.com/forecast'
  const [userName, setUserName] = useState(localStorage.getItem('weatherAppName'))
  const [noAuth, setNoAuth] = useState('')
  const [goSearch, setGoSearch] = useState(false)


  async function addItem(data){
    const col = collection(db, 'data')
    const itemAdded = await addDoc(col, data)
  }

  useEffect(() => {
    
    if(userName !== '' && userName !== 'null' && userName){
      setGoSearch(true)
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    localStorage.setItem('weatherAppName', userName)
  },[userName])   


  useEffect(() => {
      if(goSearch){
        window.navigator.geolocation.getCurrentPosition(
          position => {
            setDir({lon: position.coords.longitude, lat: position.coords.latitude})
            addItem({date: new Date(), Direccion: {lon: position.coords.longitude , lat: position.coords.latitude}})
          }, err => {
            console.log(err)
            setNoAuth('por favor conceder acceso a tu ubicacion al navegador')
          }
        )
      }    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[goSearch])


  useEffect(() => {
    if (dir.lon !== 0){
      const third = helper.getWeather(dir.lon, dir.lat, urlWeatherToday)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      .then(res => setWeatherData(res))
      .catch(console.error)
  
      const fourth = helper.getWeather(dir.lon, dir.lat, urlWeatherForcast)
      .then(res => setWeatherDataFutre(res))
      .catch(console.error)
    }
  }, [dir])


  return (
    <WeatherContext.Provider value={{weatherData, weatherDataFutre, setUserName, noAuth, setGoSearch}}>
        {children}
    </WeatherContext.Provider>
  )
}
//
export default WeatherProvider
