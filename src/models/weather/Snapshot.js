import Location from '../Location';
import Condition from './Condition';
import Measurements from './Measurements';

export default class Snapshot {

  constructor(obj) {
    this.id = obj.id;
    this.timestamp = obj.dt * 1000;

    this.location = new Location(
      obj.id,
      obj.sys.country,
      undefined,
      obj.name,
    );

    this.measurements = new Measurements(
      obj.main.temp,
      obj.main.pressure,
      obj.main.humidity,
      obj.wind.speed,
      obj.wind.deg,
      obj.clouds.all,
    );

    this.conditions = obj.weather.map(condition => new Condition(
      condition.id,
      condition.main.toLowerCase(),
      condition.description.toLowerCase(),
      condition.icon,
    ));
  }

  equals(other) {
    if (!other) {
      return false;
    }

    return this.timestamp === other.timestamp &&
      this.id === other.id &&
      this.location.equals(other.location) &&
      this.measurements.equals(other.measurements) &&
      this.__conditionsEqual(other.conditions);
  }

  __conditionsEqual(otherConditions) {
    if (!otherConditions) {
      return false;
    }

    const conditions = this.conditions;
    const len = conditions.length;

    if (len !== otherConditions.length) {
      return false;
    }

    for (let i = 0; i < len; i++) {
      if (!conditions[i].equals(otherConditions[i])) {
        return false;
      }
    }

    return true;
  }
}
