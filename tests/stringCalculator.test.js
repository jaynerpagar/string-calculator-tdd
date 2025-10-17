const { add } = require("../src/stringCalculator");

test('should return o for an empty string', ()=> {
 expect(add('')).toBe(0);
})

