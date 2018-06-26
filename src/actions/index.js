const API_KEY = 'fd2e05144199f31e5bf84141bbf6ec0c';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

const fetchData = async function(url, callback) {
	let resp = await fetch(url);
	if (resp.status !== 200) {
		callback();
	}
	return resp.json();
};

export function fetchWeather(city, callback) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = fetchData(url, callback);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

export function toggleModal() {
	return {
		type: 'TOGGLE_MODAL'
	};
}
