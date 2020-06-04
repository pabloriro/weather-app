import React from 'react';
import propTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data: {temperature, weatherState, humidity, wind} }) => (
    <div className="weatherDataCont">
    <WeatherTemperature 
    temperature={temperature} 
    weatherState={weatherState}
    />
    <WeatherExtraInfo humidity={humidity} wind={wind}/>
    
    </div>
    );

    WeatherData.propTypes = {
        data: propTypes.shape({
            temperature: propTypes.string.isRequired,
            weatherState: propTypes.string.isRequired,
            humidity: propTypes.number.isRequired,
            wind: propTypes.number.isRequired,
        }),
    }

export default WeatherData;