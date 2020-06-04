import React from 'react';
import propTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
    <ForecastItem 
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay} 
        hour={forecast.hour} 
        data={forecast.data}>
    </ForecastItem>));
}

const renderProgress = () => {
    return <h3>Cargando Pronostico Extendido..</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (

        <div><h1 className="forecast-title">Pronóstico Extendido para {city}</h1>
        {forecastData ?
            renderForecastItemDays(forecastData) :
            renderProgress()}
        </div>
);

ForecastExtended.propTypes = {
    city: propTypes.string.isRequired,
    forecastData: propTypes.array,
}

export default ForecastExtended;