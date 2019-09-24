
function XO(str) {
    //code here
     let word = str.toLocaleLowerCase();    
    let oCount=word.split('').filter(x=>x=='o').length;
    let xCount=word.split('').filter(x=>x=='x').length;      
   // console.log((oCount===xCount)?true:false);
  return (oCount===xCount)?true:false;
}