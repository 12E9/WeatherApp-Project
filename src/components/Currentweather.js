import React from "react";
import './Current-weather.scss';
class Currentweather extends React.Component {
  render() {
    let img;
    if(this.props.icon){
      const url = `http://openweathermap.org/img/wn/${this.props.icon}@4x.png`;
      img=(
        <img
            className="current-weather__icon"
            src={url}
            alt={this.props.description}
          />
      )
    }
    
    return (
      <div className="current-weather">
        <div className="current-weather__content">
          <div className="current-weather__text">
          <p className="current-weather__temp">
            {this.props.currentTemperature} °
          </p>
          <p className="current-weather__description">
            {this.props.description}
          </p>
          </div>
          {img}
        </div>
        <div>
          <p className="current-weather__feels_like">
            Feels Like{this.props.feelsLike} °
          </p>
        </div>
      </div>
    );
  }
}
export default Currentweather;
