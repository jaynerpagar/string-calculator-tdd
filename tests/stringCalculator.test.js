const {  multiply } = require("../src/stringCalculator");

test('should return o for an empty string', ()=> {
 expect(multiply('')).toBe(0);
});

test('should return the number itself for a single number input',()=>{
  expect(multiply('1')).toBe(1);
  expect(multiply('42')).toBe(42);
});

test('should return the sum of two numbers separated by comma',()=>{
    expect(multiply('1,2')).toBe(2);
    expect(multiply('200,500')).toBe(100000);
});

test('should sum multiple numbers separated by commas', ()=>{
    expect(multiply('1,2,3,4')).toBe(24);
    expect(multiply('5,2')).toBe(10);
});

test('should handle newline as delimeter along with commas',()=>{
  expect(multiply('1\n2,3')).toBe(6);
  expect(multiply('10\n20\n30')).toBe(6000);
});

test('should support custom delimiters definr in the beginning of the string',()=> {
  expect(multiply('//;\n1;2')).toBe(2);
  expect(multiply('//#\n2#3#4')).toBe(24);
  expect(multiply('//|\n1|2|3')).toBe(6);
});


test('should throw an error for negative numbers', () => {
  expect(() => multiply('1,-2,3')).toThrow('Negatives not allowed: -2');
  expect(() => multiply('//;\n-1;2')).toThrow('Negatives not allowed: -1');
});

test('should ignore numbers greater than 1000', () => {
  expect(multiply('2,1001')).toBe(2);
  expect(multiply('1000,1001,5')).toBe(5000);
  expect(multiply('//;\n1000;1001;2')).toBe(2000);
});

