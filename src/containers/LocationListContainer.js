import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from './../actions'; 
import { getWeatherCities } from './../reducers';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    
    componentDidMount(){
        this.props.setWeather(this.props.cities);
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesweather}
            onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setCity: propTypes.func.isRequired,
    cities: propTypes.array.isRequired,
    citiesWeather: propTypes.array,
};

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
    citiesWeather: propTypes.array,
});

const mapsStateToProps = state => ({citiesWeather: getWeatherCities(state)});

export default connect(mapsStateToProps, mapDispatchToPropsActions)(LocationListContainer);