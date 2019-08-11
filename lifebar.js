let readlineSync = require('readline-sync');


        let width = readlineSync.question("Enter Bar width: ")

        let currentHp = readlineSync.question("Enter Current HP: ")

        let maxHp = readlineSync.question("Enter max Hp: ")
  
         
        let pipes

        let dashes
        
   

        currentHp1 =  Math.floor((currentHp / maxHp) * 100)

        expectedpipes =  Math.floor((currentHp1 / 100) * width)

        overallwidth =  Math.floor(((width / 100) * 100 ) )

      
  
        expecteddashes =  width - expectedpipes


         let finalPipes = "|"
         let finalDashes = "-"

         if (expectedpipes > 0 ) {
 
          for (pipes = 1; pipes < expectedpipes; pipes++ ) {
         
            finalPipes += "|"
  
           } 
         }  else {

          finalPipes = ""
         }


         if ( expecteddashes > 0 ) {

          for (dashes = 1; dashes < expecteddashes; dashes++ ) {

            finalDashes += "-"
  
           }


         } else {
          finalDashes = ""
         }
     
        console.log( "[" + finalPipes + finalDashes + "] " +  currentHp + "/" + maxHp );