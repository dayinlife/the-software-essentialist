import { describe, test, expect } from '@jest/globals';
import { fizzBuzz } from "./fizzbuzz";
 

describe('fizzBuzz module', () => {
  test('test input number 0 returns Enter numbers between 1 to 100', () => {
    expect(fizzBuzz(0)).toBe('Enter numbers between 1 to 100');
  });

  test('test input number 101 returns Enter numbers between 1 to 100', () => {
    expect(fizzBuzz(101)).toBe('Enter numbers between 1 to 100');
  });

  test('test input number 3 returns Fizz', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('test input number 15 returns FizzBuzz', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  test('test input number 10 returns Buzz', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  test('test input number 8 returns 8', () => {
    expect(fizzBuzz(8)).toBe('8');
  });
}); 