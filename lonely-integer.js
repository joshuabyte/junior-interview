function lonelyinteger(a) {
  let unique = a.filter(function (value) {
    return a.indexOf(value) === a.lastIndexOf(value);
  });

  return unique[0];
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));
