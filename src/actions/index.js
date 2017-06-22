import axios from 'axios';
const API_KEY = 'b3f9115a9f05b7430939c40ccde6f112';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`
    const request = axios.get(url);

    return {//Action creators return an action with a type and payload, payload has information of the action performed
        type: FETCH_WEATHER,
        payload: request //returning axios promise as the payload
        //Since we are using middleware Redux Promise, it looks at the payload specifically sees that it is a promise
        //Stops the action entirely since its a promise, and resolves the promise for us sending the resolved data
        //to the reducer as the payload
    }
}

//This action creator sends the action directly to the reducer_weather.js with the specified type: FETCH_WEATHER