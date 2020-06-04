import React from 'react';
import propTypes from 'prop-types';
import WeatherData from './../WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => (
<div>
    <div><h2>{weekDay} Hora: {hour} hrs.</h2></div>
    <WeatherData data={data}/>
</div>
);

ForecastItem.propTypes = {
    weekDay: propTypes.string.isRequired,
    hour: propTypes.number.isRequired,
    data: propTypes.shape({
        temperature: propTypes.string.isRequired,
        weatherState: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.number.isRequired,
    }),
}

export default ForecastItem;