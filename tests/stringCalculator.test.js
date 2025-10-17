const { add } = require("../src/stringCalculator");

test('should return o for an empty string', ()=> {
 expect(add('')).toBe(0);
})

test('should return the number itself for a single number input',()=>{
  expect(add('1')).toBe(1);
  expect(add('42')).toBe(42);
})