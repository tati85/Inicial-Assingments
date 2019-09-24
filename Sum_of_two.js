function sumTwoSmallestNumbers(numbers) {  
  //Code here
  let firstLower=min(numbers);
  let pos=firstLower[1];
  numbers.splice(pos,1);
  console.log(numbers);
  let secondLowest=min(numbers);
  let result=sum(firstLower[0],secondLowest[0]);
  return result;
};
function min(array){
  let lower=array[0];
  let position=0;
  for(let i=1;i<array.length;i++)
    if (lower>array[i])
    {
      lower=array[i];
      position=i;
    }
  let arrayResult=[lower,position];  
  return arrayResult;
};
function sum(num1,num2){
  return num1+num2;
};

---------------------------------------------------------------------------
Other solution
-------------------------------------------------------------------------
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  numbers.sort(function(a, b){return a-b});
  let result=sum(numbers[0],numbers[1]);
  return result;
};

function sum(num1,num2){
  return num1+num2;
};