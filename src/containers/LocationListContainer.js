import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions'; 
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
  
    componentDidMount(){
        const { setWeather, setCity, cities, city } = this.props;
        
        setWeather(cities);
        setCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
            onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: propTypes.func.isRequired,
    cities: propTypes.array.isRequired,
    citiesWeather: propTypes.array,
    city: propTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});

const mapsStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapsStateToProps, mapDispatchToPropsActions)(LocationListContainer);