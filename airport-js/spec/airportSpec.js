describe("Airport", function() {
  let plane = new Plane();
  let airport = new Airport();

  describe("land", function() {
    
    it("orders a plane to land", function () {
      airport.land(plane);
      expect(plane.getState()).toEqual("landed")
    });
  });
})