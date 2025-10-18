

function add(input){  //changing the passing parameters from number to input for better understanding 
 //if input is empty then return 0   
 if(input === '') return 0;

const normalise  = input.replace(/\n/g, ','); //normalizing the input by replacing new line with comma

const number = normalise.split(',') //splitting the input string into array of numbers
              .map(num => num.trim()) //trimming any extra spaces
              .filter(num => num !== '') //filtering out any empty strings
              .map(Number); //converting string numbers to integers

  // Convert input string to array of numbers and sum them
return number.reduce((sum,num)=> sum + num,0);
 
}

module.exports = { add };
