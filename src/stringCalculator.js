

function add(numbers){
 //if input is empty then return 0   
 if(numbers === '') return 0;

 //if input is a single number then return that number 
 return Number(numbers);
}

module.exports = { add };
