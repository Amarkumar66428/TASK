var prompt = require('prompt-sync')();

console.log("======================={   Welcome To Lucky Draw  }=========================");
prompt("Press enter to generate a number ");

function getUserNumber() {
  return Math.floor(Math.random() * 10);
  }

const userNumber = getUserNumber();
console.log("Your generated number is : " + userNumber);

 prompt("Press enter to start");

 
 for(var i=1;i<=2;i++){

  function getLuckyNumber() {
  return Math.floor(Math.random() * 10);

   }

   var luckyNum = getLuckyNumber();
 
   console.log("The lucky number is : " + luckyNum);


   if (luckyNum==userNumber) {
  
  console.log("======================={  Congrats! You won  }================================");
  break;
}  
else{ 
 
  console.log("======================={  Sorry! bad luck   }=================================");  
}
  if(i==1){
    prompt("Press enter to start again");
  }
}
console.log("-----------------------{   Game finished!   }---------------------------------");