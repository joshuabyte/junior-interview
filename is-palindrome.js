//Solution 1
function isPalindrome(str) {
  let arr = str.split("");
  let reverse = arr.reverse();

  return str == reverse.join("")
    ? "It's a palindrome"
    : "It's not a palindrome";
}

console.log(isPalindrome("oso"));

//Solution 2. Will return true or false.
const palindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  console.log(str === reversed);
};

palindrome("oso")
