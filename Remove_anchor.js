function removeUrlAnchor(url){
  // TODO: complete
  let urlArray=url.split('');
  let index=urlArray.findIndex(x=>x=='#'?true:false);
  if(index > -1)
  {
    urlArray.splice(index,urlArray.length-index);
    let resultUrl=urlArray.join('');
    return resultUrl
 
  }
  else
    return url;
}