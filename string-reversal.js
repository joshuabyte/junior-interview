//#1 Reverse a string

function reverseString(str) {
  let arr = str.split("");
  arr.reverse();

  str = arr.join("");
  return str;
}

console.log(reverseString("Greetings!"));

//#1.1 Reverse a string
function reverseString(str) {
  let arr = str.split("");
  arr.reverse();

  str = arr.join("");
  console.log(str);
}

reverseString("Greetings!");
