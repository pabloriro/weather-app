import React from 'react';
import propTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handleWeatherLocationClick = city => {
        console.log(`handleWeatherLocationClick ${city}`);
        onSelectedLocation(city);
    };
    const strToComponents = cities => (
        cities.map (city => (
        <WeatherLocation 
        key={city.key} 
        city={city.name}
        onweatherLocationClick = {() => handleWeatherLocationClick(city.name)}
        data = {city.data} />))
    );

    return (<div className="locationList">
        {strToComponents(cities)}
    </div>);
};

LocationList.protoTypes = {
    cities: propTypes.array.isRequired,
    onSelectedLocation: propTypes.func,
};

export default LocationList;