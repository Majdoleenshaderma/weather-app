import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Body from './bodyweather';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        axios.get('weather API endpoint')
            .then(response => {
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);


    return (
        <Body />
    );
}

export default WeatherApp;
