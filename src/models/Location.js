import locationService from '../services/locationService';

export default class Location {

  constructor(id, countryCode, region, city) {
    this.id = id;
    this.countryCode = countryCode.toUpperCase();
    this.region = region;
    this.city = city;
  }

  countryName() {
    return locationService.countryCodeToName(this.countryCode);
  }

  flagUrl() {
    return `img/flags/${this.countryCode.toLowerCase()}.svg`
  }

  equals(other) {
    if (!other) {
      return false;
    }

    return this.id === other.id &&
      this.countryCode === other.countryCode &&
      this.region === other.region &&
      this.city === other.city;
  }
}
