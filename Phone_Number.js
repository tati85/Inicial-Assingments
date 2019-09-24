function createPhoneNumber(numbers){
numbers.unshift("(");  
numbers.splice(4,0,")"," ");  
numbers.splice(9,0,"-");  
let phone=numbers.join('');
return phone; 
  
}