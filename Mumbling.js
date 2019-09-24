function accum(s) {
	// your code
  let b=s.split('');
  let newWord=s.toLocaleUpperCase().charAt(0).concat("-");
  let oldWord=newWord;  

  for(let i=1;i<b.length;i++)
  {
    newWord=oldWord.concat(s.toLocaleUpperCase().charAt(i));
    oldWord=newWord;
    repeatChar=s.toLocaleLowerCase().charAt(i).repeat(i);
    if(i===b.length-1)
      newWord=oldWord.concat(repeatChar);
    else{
      newWord=oldWord.concat(repeatChar,"-");
      oldWord=newWord;
    }    

    console.log( newWord);
  }
  return newWord;
};