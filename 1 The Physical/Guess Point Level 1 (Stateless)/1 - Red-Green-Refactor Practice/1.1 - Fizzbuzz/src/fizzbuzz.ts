export function fizzBuzz(number: number): string  {
  if (number < 1 || number > 100) return "Enter numbers between 1 to 100"; 
  if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz"
  if (number % 3 == 0) return "Fizz"
  if (number % 5 == 0)   return "Buzz"

  return number.toString();
}
