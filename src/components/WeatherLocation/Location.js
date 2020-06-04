import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {

   return ( 
    <div className="locationCont">
        <h1>{city}</h1>
    </div>)
};

Location.propTypes = {
    city: propTypes.string.isRequired,
};

export default Location;