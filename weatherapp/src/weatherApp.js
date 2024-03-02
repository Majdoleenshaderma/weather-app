import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import Profile from './profile';
import Body from './bodyweather';



function WeatherApp() {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        // Fetch weather data from API
        axios.get('weather API endpoint')
            .then(response => {
                // Assuming the response data is an array of weather data for 7 days
                setWeatherData(response.data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);


    return (
        <div>
<Body/>
        </div>



    );
}

export default WeatherApp;
