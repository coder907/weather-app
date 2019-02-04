export default class Location {

  constructor(countryCode, city) {
    this.countryCode = countryCode.toUpperCase();
    this.city = city;
  }

  flagUrl() {
    return `img/flags/${this.countryCode.toLowerCase()}.svg`
  }

  equals(other) {
    if (!other) {
      return false;
    }

    return this.countryCode === other.countryCode &&
      this.city === other.city;
  }
}
