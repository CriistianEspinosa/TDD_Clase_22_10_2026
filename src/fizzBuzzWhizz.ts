/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */

  const esPrimo = (number: number): boolean => {
  if (number < 2) return false;

  
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};


export const game = (input: number) => {

   if (input % 3 === 0 && input % 5 === 0) {
  return "FizzBuzz";


} else 
  if (input % 3 === 0) {
  if (input >= 2 && input <= 100 && esPrimo(input)) {
    return "FizzWhizz";
  }
  return "Fizz";


} else 
  if (input % 5 === 0) {
  if (input >= 2 && input <= 100 && esPrimo(input)) {
    return "BuzzWhizz";
  }
  return "Buzz";
}


if (input >= 2 && input <= 100 && esPrimo(input)) {
  return "Whizz";
}

return input;
  

};