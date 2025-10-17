const { add } = require("../src/stringCalculator");

test('should return o for an empty string', ()=> {
 expect(add('')).toBe(0);
});

test('should return the number itself for a single number input',()=>{
  expect(add('1')).toBe(1);
  expect(add('42')).toBe(42);
});

test('should return the sum of two numbers separated by comma',()=>{
    expect(add('1,2')).toBe(3);
    expect(add('200,500')).toBe(700);
});

