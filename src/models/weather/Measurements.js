import Wind from "./Wind";

export default class Measurements {

  constructor(temperature, pressure, humidity, windSpeed, windDirection, clouds) {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.wind = new Wind(windSpeed, windDirection);
    this.clouds = clouds;
  }
  equals(other) {
    if (!other) {
      return false;
    }

    return this.temperature === other.temperature &&
      this.pressure === other.pressure &&
      this.humidity === other.humidity &&
      this.wind.equals(other.wind) &&
      this.clouds === other.clouds;
  }
}
