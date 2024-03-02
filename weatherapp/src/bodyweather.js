<<<<<<< Updated upstream
import React, { useState } from 'react';
import { Box, Container, Grid, SvgIcon, Typography } from '@mui/material';
import Search from './components/Search/Search';
import WeeklyForecast from './components/WeeklyForecast/WeeklyForecast';
import TodayWeather from './components/TodayWeather/TodayWeather';
import { fetchWeatherData } from './api/OpenWeatherService';
import UTCDatetime from './components/Reusable/UTCDatetime';
import LoadingBox from './components/Reusable/LoadingBox';
import { ReactComponent as SplashIcon } from './assets/splash-icon.svg';
import { ALL_DESCRIPTIONS } from './utilities/DateConstants';
import {getWeekForecastWeather,} from './utilities/DataUtils';

function App() {
    const [todayWeather, setTodayWeather] = useState(null);
    const [weekForecast, setWeekForecast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const searchChangeHandler = async (enteredData) => {
        const [latitude, longitude] = enteredData.value.split(' ');

        setIsLoading(true);

        try {
            const [todayWeatherResponse, weekForecastResponse] =
                await fetchWeatherData(latitude, longitude);

            const all_week_forecasts_list = getWeekForecastWeather(
                weekForecastResponse,
                ALL_DESCRIPTIONS
            );

            setTodayWeather({ city: enteredData.label, ...todayWeatherResponse });
            setWeekForecast({
                city: enteredData.label,
                list: all_week_forecasts_list,
            });
        } catch (error) {
            setError(true);
        }

        setIsLoading(false);
    };

    let appContent = (
        <Box
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                width: '100%',
                minHeight: '500px',
            }}
        >
            <SvgIcon
                component={SplashIcon}
                inheritViewBox
                sx={{ fontSize: { xs: '100px', sm: '120px', md: '140px' } }}
            />
            <Typography
                variant="h4"
                component="h4"
                sx={{
                    fontSize: { xs: '12px', sm: '14px' },
                    color: 'rgba(255,255,255, .85)',
                    fontFamily: 'Poppins',
                    textAlign: 'center',
                    margin: '2rem 0',
                    maxWidth: '80%',
                    lineHeight: '22px',
                }}
            >
            </Typography>
        </Box>
    );

    if (todayWeather && weekForecast) {
        appContent = (
            <React.Fragment>
                <Grid item xs={12} md={todayWeather ? 6 : 12}>
                    <Grid item xs={12}>
                        <TodayWeather data={todayWeather}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <WeeklyForecast data={weekForecast} />
                </Grid>
            </React.Fragment>
        );
    }

    if (isLoading) {
        appContent = (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    minHeight: '500px',

                }}
            >
                <LoadingBox value="1">
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{
                            fontSize: { xs: '10px', sm: '12px' },
                            color: 'rgba(255, 255, 255, .8)',
                            lineHeight: 1,
                            fontFamily: 'Poppins',


                        }}
                    >
                        Loading...
                    </Typography>
                </LoadingBox>
            </Box>
        )
    }

    return (

        <Container
            sx={{
                maxWidth: { xs: '95%', sm: '80%', md: '1100px' },
                width: '100%',
                height: '100%',
                margin: '0 auto',
                padding: '1rem 0 3rem',
                marginBottom: '1rem',
                marginTop: '1rem',
                backdropFilter: 'blur(30px)',
                borderRadius: {
                    xs: 'none',
                    sm: '0 0 1rem 1rem',
                },
                boxShadow: {
                    xs: 'none',
                    sm: 'rgba(0,0,0, 0.5) 0px 10px 15px -3px, rgba(0,0,0, 0.5) 0px 4px 6px -2px',
                },
            }}
        >
            <Grid container columnSpacing={2}>
                <Grid item xs={12}>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{
                            width: '100%',
                            marginBottom: '1rem',
                        }}
                    >
                        <UTCDatetime />
                    </Box>
                    <Search onSearchChange={searchChangeHandler} />
                </Grid>
                {appContent}
            </Grid>
        </Container>
=======
import './login.Module.css'
import React, { useState, useEffect } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import {fetchCities} from '../src/api/weather_api'

function Body() {
    const [country, setCountry] = useState(''); // State variable for country
    const [error, setError] = useState(null); // State variable for error
    const [weatherData, setWeatherData] = useState(null);

    const searchWeather = ({ onSearchChange }) =>{
        const [searchValue, setSearchValue] = useState(null);

        const loadOptions = async (inputValue) => {
            const citiesList = await fetchCities(inputValue);
        
            return {
              options: citiesList.data.map((city) => {
                return {
                  value: `${city.latitude} ${city.longitude}`,
                  label: `${city.name}, ${city.countryCode}`,
                };
              }),
            };
          };

          const onChangeHandler = (enteredData) => {
            setSearchValue(enteredData);
            onSearchChange(enteredData);
          };
        
          return (
            <AsyncPaginate
              placeholder="Search for cities"
              debounceTimeout={600}
              value={searchValue}
              onChange={onChangeHandler}
              loadOptions={loadOptions}
            />
          );
    }
        
    

    return (
        <div className="wrapper">
            <div style={{ width: "1000px", paddingBottom: "300px" }}>
                <div class="container" style={{ marginTop: "30px" }}>
                    <table style={{ width: "1000px" }}>
                    <caption> 
                        <input type="text" placeholder="search" id="countryInput"></input>
                        <button onClick={searchWeather}>Search</button>
                    </caption>
                        <div class="wrapper">
                            <tr>
                                <td >
                                    <div class="img_section">
                                        <div class="default_info">
                                            <h2 class="default_day">Sunday</h2>
                                            <span class="default_date">18 September 2023 </span>
                                            <div class="icons">
                                                <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" id='condition_icon'/>
                                                <h2 class="weather_temp">22°C</h2>
                                                <h3 class="cloudtxt" id='condition'>Overcast Clouds</h3>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="content_section">
                                        <div class="day_info">
                                            <tr className='rside'>
                                                <div class="content">
                                                    <p class="title">NAME</p>
                                                    <span class="value">United Kingdom</span>
                                                </div></tr>
                                            <tr className='rside'>
                                                <div class="content">
                                                    <p class="title">TEMP</p>
                                                    <span class="value" id='temperature'>23°C</span>
                                                </div></tr><tr className='rside'>
                                                <div class="content">
                                                    <p class="title">HUMIDITY</p>
                                                    <span class="value">2%</span>
                                                </div></tr><tr className='rside'>
                                                <div class="content">
                                                    <p class="title">WIND SPEED</p>
                                                    <span class="value">2.92 Km/h</span>
                                                </div></tr>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
>>>>>>> Stashed changes
    );
}

export default App;
