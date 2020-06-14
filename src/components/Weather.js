import React, {useState, useEffect} from 'react'
import getUpi from '../server/getUpi'
import {Card, CardImg, CardText, Col, Row} from 'reactstrap';

const axios = require('axios')

const Weather = () => {
    const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [weatherData, setWeatherData] = useState({})
    const [placeUpi, setPlaceUpi] = useState({})

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

    const farenheit2centigrade = degreesFarenheit => {
        console.log(degreesFarenheit)
        let degreesCentigrade = (degreesFarenheit-32)*5/9 
        return degreesCentigrade
    }

console.log(weatherData)

    return (
        <>
            <p className='weather-city'>{placeUpi.city}</p>
            <div>
                <img className='weather-img' src={`http://openweathermap.org/img/wn/${weatherData?.current?.weather[0]?.icon}@2x.png`}/>
                <p className='weather-main'>{weatherData?.current?.weather[0]?.main}</p>
                <p className='weather-temp'>{Math.round(weatherData?.current?.temp)}&#8457;
                {/* /{Math.round(farenheit2centigrade(weatherData?.current?.temp))}&#8451; */}
                </p>
                <p className='weather-rain'>Rain: {weatherData?.current?.rain || 0}</p>
            </div>
            <div>
                <Row>
                    {
                        weatherData?.daily?.slice(1, 5).map((D,i) => {
                            return (
                                <Col sm='3'>
                                    <Card key={i} 
                                          className='weather-daily'>
                                        <CardImg top 
                                                 src={`http://openweathermap.org/img/wn/${D.weather[0]?.icon}@2x.png`} 
                                                 alt=''
                                        />
                                        <CardText>
                                            <small>{DAYS_OF_WEEK[(new Date(D.dt*1000)).getDay()]}</small>
                                        </CardText>
                                        <CardText>

                                        </CardText>
                                    </Card>
                                </Col>
                            )
                          })
                        }
                </Row>
            </div>
        </>
    )
}

export default Weather
