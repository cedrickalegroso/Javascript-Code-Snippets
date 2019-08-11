let readlineSync = require('readline-sync');




let test =  readlineSync.question("").toUpperCase();
let start = readlineSync.question("");
let end = readlineSync.question("");

let tempstart = start 

universalStart =  start 
let a = 0
let i = 0
let char1 = ""
let character;

  for(a = 0; a < test.length; a++ ) {

    character = test[a]

    if (character >= 'A' && character <= 'Z' || character >= 'a' && character <= 'z' ) {
      
          for (i = 0; i < start; i++) {
            char1 += test[a]
          }

    } else {
       
      tempstart = start - 1
    
      start = 1
      
      for (i = 0; i < 1; i++) {
        char1 += test[a]
     }
     start = tempstart

    }

    if( start != end ) {
     
      start++
    } else {
      
      start = universalStart
      
    }
    
}
  
console.log(char1.toUpperCase());