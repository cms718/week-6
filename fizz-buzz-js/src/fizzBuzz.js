class FizzBuzz {
  play = (num) => {
    let result = "";
    if (num % 3 == 0) {
      result += "Fizz";
    }
    if (num % 5 == 0) {
      result += "Buzz";
    }
    return result ? result : num;
  };
}
