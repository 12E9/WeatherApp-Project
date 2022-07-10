import "./App.scss";
import Searchbar from "./components/Searchbar";
import Currentweather from "./components/Currentweather";
import React from "react";
import { getCurrentWeather,getForecast } from "./api/weather-api";
import Forecast from "./components/Forecastweather";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Barranquilla",
      temperature: "",
      feelsLike: "",
      description: "",
      icon: "",
      hourlyForecast:[]
    };
    
  }
  componentDidMount(){
    this.onFormSubmit();
  }
  onInputChange(e) {
    this.setState({
      location: e.target.value,
    });
  }
  async onFormSubmit() {
    const weatherRes = await getCurrentWeather(this.state.location);
    const lat = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    
    const forecastRes = await getForecast(lat,lon);
      this.setState({
        temperature: weatherRes.data.main.temp,
        feelsLike:  weatherRes.data.main.feels_like,
        description: weatherRes.data.weather[0].main,
        icon: weatherRes.data.weather[0].icon,
        hourlyForecast:forecastRes.data.hourly
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Searchbar
            location={this.state.location}
            inputChange={(e) => this.onInputChange(e)}
            formSubmitted={() => this.onFormSubmit()}
          />
          <Currentweather
            currentTemperature={this.state.temperature}
            feelsLike={this.state.feelsLike}
            description={this.state.description}
            icon={this.state.icon}
          />
          <Forecast forecast={this.state.hourlyForecast} />
        </header>
      </div>
    );
  }
}

export default App;
