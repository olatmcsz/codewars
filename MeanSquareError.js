var solution = function (firstArray, secondArray) {
  var division = 0;
  for (var i = 0; i < firstArray.length; i++) {
    var numbers = Math.pow(Math.abs(secondArray[i] - firstArray[i]), 2);
    result += numbers;
    division += numbers;
  }
  var result = division / firstArray.length;
  return result;
};
console.log(solution([-1, 0], [0, -1]));
