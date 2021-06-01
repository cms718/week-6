class Airport {
  constructor() {
    this.planes = []
  }

  land(plane) {
    if(this.planes.length == 20) {
      throw new Error('The airport is full');
    } else {
      this.planes.push(plane);
      plane.land();
    }
  }

  takeoff(plane) {
    plane.takeoff();
  }
}