function factorial(n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result = result * i;
  }
  var result = result.toString();
  return result;
}

console.log(factorial(103));
