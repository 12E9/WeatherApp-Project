import axios from 'axios';

axios.defaults.baseURL ='http://api.openweathermap.org/data/2.5/';
const appIdQueryParam = `appid=${process.env.REACT_APP_API_KEY}`;

function getCurrentWeather(location){
    return axios.get(
        `weather?q=${location}&units=imperial&${appIdQueryParam}`
    )
}
function getForecast(lat,lon){
    return axios.get(
        `onecall?lat=${lat}&lon=${lon}&units=imperial&${appIdQueryParam}`
    )
}
export {
    getCurrentWeather,
    getForecast
}


