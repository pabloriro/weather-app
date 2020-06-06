import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions'; 
import { getWeatherCities, getCity } from './../reducers';
import LocationList from './../components/LocationList';
import { bindActionCreators } from 'redux';


class LocationListContainer extends Component {
  
    componentDidMount(){
        const { setWeather, setSelectedCity, cities, city } = this.props;
        
        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList cities={this.props.citiesWeather}
            onSelectedLocation={this.handleSelectedLocation}/>
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: propTypes.func.isRequired,
    setWeather: propTypes.func.isRequired,
    cities: propTypes.array.isRequired,
    citiesWeather: propTypes.array,
    city: propTypes.string.isRequired,
};

const mapDispatchToPropsActions = dispatch => bindActionCreators(actions, dispatch);

/*
const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});
*/

const mapsStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(mapsStateToProps, mapDispatchToPropsActions)(LocationListContainer);