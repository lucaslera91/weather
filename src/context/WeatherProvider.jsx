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


  async function addItem(data){
    const col = collection(db, 'data')
    const itemAdded = await addDoc(col, data)
    console.log(itemAdded)
  }

  useEffect(()=>{
    localStorage.setItem('weatherAppName', userName)
    console.log('yay')
    console.log(userName)
  },[userName])   


  useEffect(() => {
      if(userName){
        window.navigator.geolocation.getCurrentPosition(
          position => {
            setDir({lon: position.coords.longitude, lat: position.coords.latitude})
            addItem({nombre: userName, date: new Date(), Direccion: {lon: position.coords.longitude , lat: position.coords.latitude}})
            console.log(position)
          }, err => console.log(err)
        )
      }    
  },[userName])


  useEffect(() => {
    if (dir.lon !== 0){
      const third = helper.getWeather(dir.lon, dir.lat, urlWeatherToday)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      .then(res => setWeatherData(res))
      .then(res => console.log(res))
      .catch(console.error)
      console.log(third)

      const fourth = helper.getWeather(dir.lon, dir.lat, urlWeatherForcast)
      .then(res => setWeatherDataFutre(res))
      .then(res => {console.log(res)})
      .catch(console.error)
      console.log(fourth)
    }
  }, [dir])


  return (
    <WeatherContext.Provider value={{weatherData, weatherDataFutre, setUserName}}>
        {children}
    </WeatherContext.Provider>
  )
}
//
export default WeatherProvider