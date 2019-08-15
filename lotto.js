
let readlineSync = require('readline-sync');
let ans1
let ans2
let ans3
let ans4
let finalAns

lottoType = Number(readlineSync.question('Lotto Type:'))

lottoNumberCount = Number(readlineSync.question('Lotto Number Count:'))

ans3 = lottoType - lottoNumberCount

  for(let i = lottoType-1; i > 0; i-- ) {
   ans1 =  lottoType*i    
   lottoType  = ans1
  }

  for(let i = lottoNumberCount-1; i > 0; i-- ) {
    ans2 =  lottoNumberCount*i    
    lottoNumberCount  = ans2
   }

   for(let i = ans3-1; i > 0; i-- ) {
    ans4 =  ans3*i    
    ans3  = ans4
   }


   finalAns = ans1 / (ans2*ans4)

  console.log( "1 in " + Math.ceil(finalAns));