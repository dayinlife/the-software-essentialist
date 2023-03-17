import { describe, test, expect } from '@jest/globals';
import { fizzBuzz } from "./fizzbuzz";
 

describe('fizzBuzz module', () => {
  test('test input number 0', () => {
    expect(fizzBuzz(0)).toBe('Enter numbers between 1 to 100');
  });
}); 

describe('fizzBuzz module', () => {
  test('test input number 101', () => {
    expect(fizzBuzz(101)).toBe('Enter numbers between 1 to 100');
  });
}); 

describe('fizzBuzz module', () => {
  test('test input number 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
}); 

describe('fizzBuzz module', () => {
  test('test input number 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
}); 

describe('fizzBuzz module', () => {
  test('test input number 10', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
}); 


describe('fizzBuzz module', () => {
  test('test input number 8', () => {
    expect(fizzBuzz(8)).toBe('8');
  });
}); 