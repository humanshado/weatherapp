import axios from 'axios';

const API_KEY = 'b6aaf94468df81b91363f0a248854b8a';
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?q=`;

export const GET_WEATHER_DATA = 'GET_WEATHER_DATA';

export const getWeatherData = (city) => {
    const url = `${BASE_URL}${city}&appid=${API_KEY}`;
    const request = axios.get(url);
    console.log('Request Sent ',request);
    return {
        type: GET_WEATHER_DATA,
        payload: request
    } 
};
