

function add(input) {
  if (input === '') return 0;

  let delimiter = /[,\n]/; // default delimiters: comma and newline
 if (input.startsWith('//')) {
    const parts = input.split('\n');
    let customDelimiter = parts[0].slice(2);

    // Escape regex special characters (like |, *, +, etc.)
    customDelimiter = customDelimiter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    delimiter = new RegExp(customDelimiter);
    input = parts[1];
  }

  const numbers = input
    .split(delimiter)
    .map(num => num.trim())
    .filter(num => num !== '')
    .map(Number);

  return numbers.reduce((sum, num) => sum + num, 0);

}


module.exports = { add };
