describe("Fizz Buzz", function () {
  let fizzBuzz = new FizzBuzz();

  describe("multiples of 3", function () {
    it("returns fizz for 3", function () {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });
    it("returns fizz for 6", function () {
      expect(fizzBuzz.play(6)).toEqual("Fizz");
    });
  });
});
