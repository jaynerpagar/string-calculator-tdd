

function parseDelimiter(input) {  // parse custom delimiter if present 
  let delimiter = /,|\n/; // default
  let numbersPart = input;

  if (input.startsWith('//')) {
    const [delimiterLine, rest] = input.split('\n');
    let customDelimiter = delimiterLine.slice(2);

    // Escape regex special characters
    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    delimiter = new RegExp(customDelimiter);
    numbersPart = rest;
  }

  return { delimiter, numbersPart };
}

function splitNumbers(numbersPart, delimiter) {// split numbers based on delimiter
  return numbersPart
    .split(delimiter)
    .map(num => num.trim())
    .filter(num => num !== '')
    .map(Number);
}

function checkNegatives(numbers) { // check for negative numbers
  const negatives = numbers.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(',')}`);
  }
}

function add(input) {
  if (input === '') return 0;

  const { delimiter, numbersPart } = parseDelimiter(input); // get delimiter and numbers part
  let numbers = splitNumbers(numbersPart, delimiter); // split numbers (const creating problem for filter and map)
//check negative 
  checkNegatives(numbers);

   // Ignore numbers greater than 1000
  numbers = numbers.filter(n => n <= 1000);

  return numbers.reduce((sum, num) => sum + num, 0);

}


module.exports = { add };
