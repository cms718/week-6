describe("Airport", function() {
  let plane;
  let airport;

  beforeEach(() => {
    plane = new Plane();
    airport = new Airport();
  })

  describe("land", function() {
    it("orders a plane to land", function () {
      airport.land(plane);
      expect(plane.getState()).toEqual("landed")
    });
    it("fails when the airport is full", function (){
      for(i = 1; i <= 20; i++) {
        airport.land(new Plane());
      }
      expect( function(){ airport.land(plane); } ).toThrowError('The airport is full');
    })
  });

  describe("takeoff", function(){
    it("orders a plane to takeoff", function() {
      airport.land(plane)
      airport.takeoff(plane)
      expect(plane.getState()).toEqual("flying")
    })
  })
})