     let readlineSync = require('readline-sync');

     
      let initial = Number(readlineSync.question(''))
         let count = 0
         let ans
         let finalHeight 
        

         while(initial!=0){

         ans = initial * 3/4
         initial = ans
        
          console.log(  initial.toFixed(2))
          finalHeight = initial.toFixed(2)
          count++
          if (finalHeight < 0.01 ) {
           
            break;
          } 
          
         
         }
