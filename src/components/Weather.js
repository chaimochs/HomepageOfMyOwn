import React, {useState, useEffect} from 'react'
import getUpi from '../server/getUpi'
import moment from 'moment'
import { Button, Card, Image } from 'semantic-ui-react'

const axios = require('axios')

const Weather = () => {
   
    const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [weatherData, setWeatherData] = useState({})
    const [placeUpi, setPlaceUpi] = useState({})
    const [showWeather, setShowWeather] = useState(0)

    useEffect(() => {
    getWeather().then(res => setWeatherData(res.data))
   }, [])

    const getWeather = async () => {
        const place = await getUpi()
        await setPlaceUpi(place)
        const lat = place.latitude
        const lon = place.longitude
        const BASE_URL = "http://api.openweathermap.org/data/2.5/onecall?"
        const API_KEY = "b91d0780da24d565dc33ac2ab8678d7c"
        const url = `${BASE_URL}lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
        let weather = await axios.get(url)
        return await weather
    } 

    const daily = () => {
        return (
            <>
           {showWeather === 0 && 
            <div>
                <p className='weather-city'>{placeUpi.city}</p>
                <p>{moment().format('dddd MM-DD LT')}</p> 
                    <div>
                        <img className='weather-img' src={`http://openweathermap.org/img/wn/${weatherData?.current?.weather[0]?.icon}@2x.png`}/>
                        <p className='weather-main'>{weatherData?.current?.weather[0]?.main}</p>
                        <p className='weather-temp'>{Math.round(weatherData?.current?.temp)}&#8457;
                        {/* /{Math.round(farenheit2centigrade(weatherData?.current?.temp))}&#8451; */}
                        </p>
                        <p className='weather-rain'>Rain: {weatherData?.current?.rain || 0}</p>
                    </div>
            </div>}  
        </>
        )
    }
    const hourly = () => {
        let hourlyWeather = []
        for(let i = 3; i < 16; i+=4) 
        if(weatherData?.hourly?.length > 20)
        hourlyWeather.push(weatherData?.hourly[i])
        return (
            <>
                {showWeather === 1 &&
                    <div>
                        <Card.Group itemsPerRow={4}>
                            { hourlyWeather.map((D, i) => {
                                return (
                                    <Card key={i*30000} 
                                        className='weather-daily'>
                                        <Image top 
                                            src={`http://openweathermap.org/img/wn/${D?.weather[0].icon}@2x.png`} 
                                            alt=''
                                        />
                                        <div className='weather-content'>
                                <small>{`${new Date(D?.dt*1000).getUTCHours() + weatherData?.timezone_offset/3600}:00`}</small>
                                        </div>
                                        <div className='weather-content'>
                                            <small className='weather-4day-temp'>{Math.round(D?.temp)}&deg;</small>
                                                <br/>
                                            <small className='weather-4Day-text'>{D?.weather[0].description}</small>
                                        </div>
                                    </Card>
                                )
                            })
                          }   
                    </Card.Group>
                </div> }
            </> 
        )
    }    


    const fourDay = () => {
        return (
            <>
             {showWeather === 2 && 
             <div>
                <Card.Group itemsPerRow={4}>
                {weatherData?.daily?.slice(1, 5).map((D,i) => {
                        return (
                            <Card key={i} 
                                    className='weather-daily'>
                                <Image top 
                                            src={`http://openweathermap.org/img/wn/${D.weather[0]?.icon}@2x.png`} 
                                            alt=''
                                />
                                <div className='weather-content'>
                                    <small>{DAYS_OF_WEEK[(new Date(D.dt*1000)).getDay()]}</small>
                                </div>
                                <div className='weather-content'>
                                    <small className='weather-4day-temp'>{Math.floor(D.temp.min)}/{Math.ceil(D.temp.max)}&deg;</small>
                                    <h6 className='weather-4Day-text'>Lo/Hi</h6>
                               
                        <small className='weather-4Day-text'>{D.weather[0].main}</small>
                                </div>
                            </Card>
                        )
                    })
                }
                </Card.Group>
             </div>}
            </>
        )
    }

    return (
        <>
             <Button.Group>
                <Button size='mini' onClick={() => setShowWeather(0)}>Daily</Button>
                <Button size='mini' onClick={() => setShowWeather(1)}>Hourly</Button>
                <Button size='mini' onClick={() => setShowWeather(2)}>4Day</Button>
            </Button.Group>
          {daily()}
          {hourly()}
          {fourDay()}
          {}
        </>
    )
}

export default Weather
