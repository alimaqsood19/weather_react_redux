import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart.js';
import GoogleMap from  '../components/google_map.js';

class WeatherList extends Component {
    renderWeather(cityData) {//cityData comes from the .map() iterates through each city that has all the objects 
        //including name, list etc
        const name = cityData.city.name;
        const temps = cityData.list.map(function(weather) {
            return weather.main.temp; 
        });
        const pressure = cityData.list.map(function(weather) {
            return weather.main.pressure
        });
        const humidities = cityData.list.map(function(weather) {
            return weather.main.humidity
        });
        const {lon, lat} = cityData.city.coord; 
        // const lon = cityData.city.coord.lon;
        // const lat = cityData.city.coord.lat;

        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/>{name}</td>
                <td><Chart data={temps} color="blue" units="K"/></td>
                <td><Chart data={pressure} color="red" units="HPA"/></td>
                <td><Chart data={humidities} color="orange" units="%"/></td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (HPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather} //WeatherReducer is the value for weather as specified in reducers index.js
    //mapStateToProps is used to when your component accesses the application state (reducers) and 
    //mapDispatchToProps is used when you want your component calling an action creator.
}

export default connect(mapStateToProps)(WeatherList);