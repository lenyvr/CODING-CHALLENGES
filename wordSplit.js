function WordSplit(strArr) { 

  // code goes here  
  const notPossibleMessage = 'not possible';
  
  if(validate(strArr) ||validate(strArr[0]) || validate(strArr[1])) return notPossibleMessage;
  
  const dictionary = strArr[1].split(',');
  const sequence = strArr[0];
  let output, wordA, wordB, stop = false;
  
  for(i = 0; i < dictionary.length; i++) {
    wordA = dictionary[i];
    
    for(j = 0; j < dictionary.length; j++) {
        wordB = dictionary[j];
        
        if(wordA + wordB === sequence) {
            output = wordA + ',' + wordB;
            stop = true;
            break;
        }
    }
    
    if(stop) break;
  }
  
  return output || notPossibleMessage; 
}

function validate(objectValidate){
    
   if( Array.isArray(objectValidate)){
       return (objectValidate === undefined || objectValidate.length === 0);
   }
   
    return (objectValidate === undefined || objectValidate.replace(/\s/g,'').length === 0);
    
}
   
// keep this function call here 
WordSplit(readline());
