import axios from "axios"

const ipApi = 'https://api.ipify.org?format=json'
//const newApi = 'https://www.boredapi.com/api/activity'
const getLocationApi = `https://api.ipfind.com/?ip=`



export async function getIpApi(){
    console.log('1')
     return await axios.get(ipApi)
     .then(res => {

        return res.data.ip
        
     }).catch(console.error)
}

export async function getLocation(ip){
    console.log('2')
    return await axios.get(getLocationApi+ip)
    .then(res => {
       return res.data
    }).catch(console.error)
}

export async function getWeather(long, lati, urlApi){
    const options = {
        method: 'GET',
        url: urlApi,
        params: {
    
         lat: lati ,
         lon: long
    
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': '9351179fc6mshd17db89cb4b7803p1c248djsnf4703a573a27'
        }
    };
    console.log('3')
    return await axios.request(options)
    .then(res => {
       return res.data
    }).catch(console.error)
}










export function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved F U');
      }, 2000);
    });
  }

export function resolveSecond(something){
    return new Promise(resolve => {
        setTimeout(() => {
          resolve('Jackass - ' + something);
        }, 2000);
      });
}


