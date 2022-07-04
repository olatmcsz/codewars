function arrayDiff(a, b) {
  if (b.length == 0 || a.length == 0) return a;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}

var a = new Array([(1, 2, 3)]);
var b = new Array([2, 3, 4]);
console.log(arrayDiff([1, 2], [1]));
// for (var i = 0; i < a.length; i++) {
//   console.log(b.indexOf(a[i]));
// }
