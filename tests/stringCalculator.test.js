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

test('should sum multiple numbers separated by commas', ()=>{
    expect(add('1,2,3,4')).toBe(10);
    expect(add('5,10,15')).toBe(30);
})

test('should handle newline as delimeter along with commas',()=>{
  expect(add('1\n2,3')).toBe(6);
  expect(add('10\n20\n30')).toBe(60);
})