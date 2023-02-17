// // ============================1}
// let n = 5; 
// var string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <=n; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// // =========================== 2}
// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     if(i==1||j==1||i==n||j==n){
//     string += "*";
//   }
//   else{
//     string +=" ";
//   }
// }
//   string += "\n";
// }

// console.log(string);
// // ===========================3}
// let n = 5; 
// let string = "";
// for (let i = 0; i <= n; i++) {

//   for (let j = 0; j <= n; j++) {

//     if(i + j >= n){

//     string += "*";
  
//     }

//     else{
//       string += " ";
//     }
//   }

//   string += "\n";
// }
// console.log(string);
// // ================================= 4}
// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// // =================================== 5}
// let n = 6; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//   if(i==n || j==1 ) 
//   {
//      string += "*";
//   }
//   else if (i+j == (i*2)){
//     string += "*";
//   }
//   else{

//     string+=" ";
//   }
// }
//   string += "\n";
  
// }
// console.log(string);
// // =======================================6}
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// // ========================================7}
// let n = 6;
// let string = "";
// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 *(n- i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// // =======================================8}

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
// }
//   for (let k = 0; k <2* i -1; k++) {
//     if(i==n || k==0 || k==2*i-2){
//     string += "*";
//     }
//     else{
//       string +=" ";
//     }

// }
//   string += "\n";
// }
// console.log(string);

// // =========================================9}
// console.log(string);
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
  
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
  
//   string += "\n";
// }
// for (let l = 1; l <= 4; l++) {
  
//   for (let m = 1; m <= l ; m++) {
//     string += " ";
//   }
//   for (let o = 0; o < 2 * (n - l) - 1; o++) {
//     string += "*";
//   }
  
//   string += "\n";
// }

// console.log(string);

// // =======================================10}
// let n = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 0; i <= n ; i++) {
//   for (let j = 1; j <= (n-i) -1; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// // =========================================11}
// let n = 5; 
// let string = "";
// for (let i = 0; i <= n; i++) {

//   for (let j = 0; j <= n; j++) {

//     if(i + j >= n){

//     string += "*";
//     }
//     else{
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// for (let i = 0; i <= n-1; i++) {

//   for (let j = 0; j <=i; j++) {

//       string += " ";
//       }
//       for (let k = 0; k < n-i; k++)
//       string += "*"
//   string += "\n";
// }
// console.log(string);
// ====================================12}
// let n = 5;
// var string = "";
// for(let i = 1; i<=n;i++){
//   for(let j =0;j<=n;j++){
//     if(i==1||i==n || i==(n-j) ){
//     string+="*";
//   }
//   else{
//     string+=" "
//   }
// }
//   string+="\n";
// }
// console.log(string)
