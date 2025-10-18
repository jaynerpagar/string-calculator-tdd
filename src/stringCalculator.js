

function add(input){  //changing the passing parameters from number to input for better understanding 
 //if input is empty then return 0   
 if(input === '') return 0;

 const number = input.replace(/\n/g, ',').split(',').map(Number);

  // Convert input string to array of numbers and sum them
return number.reduce((sum,num)=> sum + num,0);
 
}

module.exports = { add };
