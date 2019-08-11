
let readlineSync = require('readline-sync');


let test1
let xCoordinate
let yCoordinate



let ans1
let ans2
let ans3
let ans4
let tempans
let finalans = 0
let area



let tempdistance = 0
let finaldistance = 0


 xCoordinate1 = Number(readlineSync.question(''))
 let  firstxCoordinate1 = xCoordinate1

 yCoordinate1 = Number(readlineSync.question(''))
 let  firstyCoordinate1 = yCoordinate1

while(!test1) {

  
        
    xCoordinate = readlineSync.question('');
    

    if (xCoordinate == "stop" ) {

        ans1 = (firstxCoordinate1  * yCoordinate1 )
        ans2 = (xCoordinate1  * firstyCoordinate1 )

      
    

        ans3 = Math.pow((firstxCoordinate1  -   xCoordinate1 ), 2)
        ans4 = Math.pow(( yCoordinate1 - firstyCoordinate1  ), 2)

   
        
        tempdistance = Math.sqrt(ans3 +  ans4)
        finaldistance = finaldistance + tempdistance 
        
      

        tempans =  ans2 -  ans1
        testlungs = tempans
      
        finalans = finalans + tempans

       
        area =  finalans / 2


    
       
        break;
    }

    yCoordinate = Number(readlineSync.question(''))

 
    ans1 = (xCoordinate1  * yCoordinate )
    ans2 = (xCoordinate  * yCoordinate1 )

    ans3 = Math.pow((xCoordinate1  -   xCoordinate ), 2)
    ans4 = Math.pow(( yCoordinate - yCoordinate1  ), 2)



    tempdistance = Math.sqrt(ans3 +  ans4)
    finaldistance = finaldistance + tempdistance 

    tempans = ans1 -  ans2
   
   finalans = finalans + tempans

   

      xCoordinate1  = xCoordinate
      yCoordinate1  =  yCoordinate  


  
}

console.log("Perimeter: " + finaldistance)
console.log("Area: "+ area)

