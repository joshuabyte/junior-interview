//For hackerrank, place code inside function. Do not call function below.
function plusMinus(arr) {
  let positive = arr.filter((number) => number > 0).length / arr.length;
  let negative = arr.filter((number) => number < 0).length / arr.length;
  let zeronums = arr.filter((number) => number == 0).length / arr.length;
  return console.log(
    positive.toFixed(6) +
      "\n" +
      negative.toFixed(6) +
      "\n" +
      zeronums.toFixed(6)
  );
}

plusMinus([1, 1, 0, -1, -1]);
