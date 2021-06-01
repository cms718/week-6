class Plane {

  constructor() {
    this.state = "flying";
  }

  land() {
    this.state = "landed"
  }
  getState() {
    return this.state
  }
}