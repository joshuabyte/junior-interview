//For hackerrank, place code inside function. Do not call function below.
function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => a + b);
    let maxVal = Math.max(...arr);
    let minVal = Math.min(...arr);
    console.log((sum - maxVal) + ' ' + (sum - minVal));
}

miniMaxSum([1, 3, 5, 7, 9]);