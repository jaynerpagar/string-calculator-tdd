

function add(input){  //changing the passing parameters from number to input for better understanding 
 //if input is empty then return 0   
 if(input === '') return 0;

 //If input contains a comma, split and sum the numbers (handle single number and multiple number)
  const numbers = input.split(',').map(Number);
   
   
 //sum all numbers 
  return numbers.reduce((sum,num)=> sum + num,0);
 
}

module.exports = { add };
