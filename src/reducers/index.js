import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
	weather: WeatherReducer,
	modalOpen: modalReducer
});

export default rootReducer;
