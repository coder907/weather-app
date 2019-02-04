export default class Condition {

  constructor(id, main, description, icon) {
    this.id = id;
    this.main = main;
    this.description = description;
    this.icon = icon;
  }

  iconUrl() {
    return `https://openweathermap.org/img/w/${this.icon}.png`;
  }

  equals(other) {
    if (!other) {
      return false;
    }

    return this.id === other.id &&
      this.main === other.main &&
      this.description === other.description &&
      this.icon === other.icon;
  }
}
