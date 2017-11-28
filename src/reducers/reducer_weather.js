import { GET_WEATHER_DATA } from '../actions/index';

const WeatherReducer = (state = [], action) => {
    
    switch(action.type){
        case GET_WEATHER_DATA:
            console.log('Action Received ', action.payload.data);
            return [ action.payload.data, ...state];
        default:
            return state;
    }
}

export default WeatherReducer;