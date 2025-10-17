

function add(input){  //changing the passing parameters from number to input for better understanding 
 //if input is empty then return 0   
 if(input === '') return 0;

 if(input.includes(',')){
    const numbers = input.split(',').map(Number);
    return numbers.reduce((sum,num)=> sum + num,0);
 }

 // Returns 0 for empty string, otherwise returns the number itself
 return Number(input);
}

module.exports = { add };
