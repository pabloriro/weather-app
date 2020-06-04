import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
       <span className="extraInfoText">{`Humedad: ${humidity} % `}</span>
       <span className="extraInfoText">{`Vientos: ${wind} m/s`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number.isRequired,
    wind: propTypes.number.isRequired,
}

export default WeatherExtraInfo; 