

function add(numbers){
 //if input is empty then return 0   
 if(numbers === '') return 0;

 // Returns 0 for empty string, otherwise returns the number itself
 return Number(numbers);
}

module.exports = { add };
