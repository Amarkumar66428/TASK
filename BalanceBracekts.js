
let stack = [];
function isbalance_check(expression) {
  for (let i = 0; i < n; i++) {
    let char = s[i];
    if (char == "(" || char == "{" || char == "[") {
      stack.push(char);
      continue;
    }
     if (stack.length == 0) return false;
    let check;
    switch (char) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }
  return stack.length == 0;
}
var  prompt =require('prompt-sync')();
var s=prompt("Enter any Brackets: ");
let n = s.length;
if (isbalance_check(s, n)) {
  console.log("balanced");
} else {
  console.log("not balanced");
}