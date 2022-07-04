function productFib(prod) {
  var first = 0;
  var second = 0;
  function fibonacci(number) {
    var a = 0;
    var b = 1;
    if (number == 0) return a;
    if (number == 1) return b;
    for (var i = 2; i < number; i++) {
      var c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
  for (var i = 0; i < prod; i++) {
    var first = fibonacci(i);
    var second = fibonacci(i + 1);
    if (first * second == prod) {
      return [first, second, true];
    }
    if (first * second > prod) return [first, second, false];
  }
}
console.log(productFib(44757));
