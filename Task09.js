var prompt = require('prompt-sync')();
const t =prompt('Enter test cases you want: ');
for(let i=1;i<=t;i++){
const n =prompt('Enter any seat number: ');
const between = (n, min, max) => {
    return n >= min && n <= max;
  }
  if (between(n,1,108)) {
    console.log("Seat is available: ");
  function seatingArrangement(n){
    const r = n % 12;
    const q = Math.floor(n/12);
    let fs;
    if(r===0){
      fs =(q - 1)*12+1;
    }
    else{
      fs=(q*12)+(13-r);
    }
    
    if(r===1 || r ===6 || r === 7 || r===0){
      console.log('WS');
    }
    else if(r===2 || r ===5 || r === 8 || r===11 ){
      console.log('MS');
    }
    else{
      console.log('AS');
    }
    return fs;
  }
  console.log(seatingArrangement(n));
}
else{
console.log("Seat is not available: ")
}
}
  