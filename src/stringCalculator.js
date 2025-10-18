function parseDelimiter(input) {
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

function splitNumbers(numbersPart, delimiter) {
  return numbersPart
    .split(delimiter)
    .map(num => num.trim())
    .filter(num => num !== '')
    .map(Number);
}

function add(input) {
  if (input === '') return 0;

  const { delimiter, numbersPart } = parseDelimiter(input);
  const numbers = splitNumbers(numbersPart, delimiter);

  return numbers.reduce((sum, num) => sum + num, 0);

}


module.exports = { add };
