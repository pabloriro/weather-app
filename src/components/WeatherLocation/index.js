import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import Location from './Location';
import WeatherData from './../WeatherData';
import propTypes from 'prop-types';
import './styles.css';

const WeatherLocation = ({ onweatherLocationClick, city, data }) =>(
            <div className="weatherLocationCont" onClick={onweatherLocationClick}>
            <Location city={city}/>
            {data ?
                <WeatherData data={data}/> : 
                <CircularProgress size={50}/>
            }
            </div>
        );

WeatherLocation.propType = {
    city: propTypes.string,
    onweatherLocationClick: propTypes.func,
}

export default WeatherLocation; 