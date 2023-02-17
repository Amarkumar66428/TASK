var prompt = require('prompt-sync')();
var word = prompt("enter any word: ");
Newstring(word);
function Newstring(word){
    let last = word.charAt(word.length - 1);
    console.log(last + word + last);
}