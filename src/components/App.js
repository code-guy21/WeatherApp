import React, { Component } from 'react';
import WeatherList from '../containers/weather_list';
import SearchBar from '../containers/search_bar';
import './App.css';
import ErrorModal from './ErrorModal';

class App extends Component {
	render() {
		return (
			<div>
				<ErrorModal />
				<SearchBar />
				<WeatherList />
			</div>
		);
	}
}

export default App;
