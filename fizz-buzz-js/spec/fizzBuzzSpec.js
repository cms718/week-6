describe("Fizz Buzz", function () {
  let fizzBuzz = new FizzBuzz();

  describe("multiples of 3", function () {
    it("returns Fizz for 3", function () {
      expect(fizzBuzz.play(3)).toEqual("Fizz");
    });
    it("returns Fizz for 6", function () {
      expect(fizzBuzz.play(6)).toEqual("Fizz");
    });
  });

  describe("multiples of 5", function () {
    it("returns Buzz for 5", function () {
      expect(fizzBuzz.play(5)).toEqual("Buzz");
    });
    it("returns Buzz for 10", function () {
      expect(fizzBuzz.play(10)).toEqual("Buzz");
    });
  });

  describe("multiples of 5 and 3", function () {
    it("returns FizzBuzz for 15", function () {
      expect(fizzBuzz.play(15)).toEqual("FizzBuzz");
    });
  });
});
