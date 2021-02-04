// complete the function
function palindrome(str) {
  // code goes here
  let changeStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  let count = 0;
  if (changeStr===""){
    console.log("Nothing found!, Please enter  a word");
    return false;
  }

  if((changeStr.length) % 2 === 0){
    count = (changeStr.length) / 2;
  } else {
     if (changeStr.length === 1){
       console.log("Entry is a palindrome.");
       return true;
     } else {
       count = ( changeStr.length - 1) /2;
     }
  }

  for ( let x = 0; x < count; x++){
    if (changeStr[x] != changeStr.slice(-1-x)[0]) {
      console.log("Entry is not a palindrome.");
      return false;
    }
  }
  console.log("Entry is a palindrome.");
  return true;
}

const string = prompt('Enter a string: ');
const value = palindrome(string);

console.log(value);


/*palindrome('madam');
palindrome('nurses run');
palindrome('fox');
palindrome('eye');
palindrome('an');*/

function solution(arg) {
  return palindrome(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
