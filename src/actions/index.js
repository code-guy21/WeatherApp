const API_KEY = 'fd2e05144199f31e5bf84141bbf6ec0c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER';

const fetchData = async function (url){
    const resp = await fetch(url);
    return resp.json();
}

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = fetchData(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}