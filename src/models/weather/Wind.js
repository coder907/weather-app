export default class Wind {

  constructor(speed, direction) {
    this.speed = speed;
    this.direction = direction;
  }

  equals(other) {
    if (!other) {
      return false;
    }

    return this.speed === other.speed &&
      this.direction === other.direction;
  }
}
