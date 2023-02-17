console.log("================={Bracket comparision}==================")
const prompt = require('prompt-sync')();
let exp ="{()]}";
let n =exp.length;
let stack = [];
if(Isbalanced(exp)){
    console.log("Balanced");
}
else{
    console.log("Not balanced");
}

function Isbalanced(exp){
    for(let i=0;i<=n;i++){
        if(exp[i]=='(' || exp[i]=='{' || exp[i]=='['){
            stack.push(exp[i]);
        }
        else if(stack[i]!=0 && exp[i]==')'){
             if(stack=='('){
                stack.pop();
             }
             else{
                return false;
            }
            }
        else if(stack[i]!=0 && exp[i]==']'){
                if(stack=='['){
                   stack.pop();
                }
                else{
                   return false;
                } 
            }
        else if(stack[i]!=0 && exp[i]=='}'){
                if(stack=='{'){
                   stack.pop();
                }
                else{
                    return false;
                }   
            }
        else{
                return true;  
            }
        }
        if(stack[i]!=0()){
            return true;
        }
        else{
            return false;
        } 
}