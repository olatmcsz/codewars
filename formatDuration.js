function formatDuration(seconds) {
  var result = [0, 0, 0, 0, 0];
  if (seconds >= 31536000) {
    for (i = 31536000; i <= seconds; seconds -= 31536000) {
      result[0] += 1;
    }
  }
  if (seconds >= 86400) {
    for (i = 86400; i <= seconds; seconds -= 86400) {
      result[1] += 1;
    }
  }
  if (seconds >= 3600) {
    for (i = 3600; i <= seconds; seconds -= 3600) {
      result[2] += 1;
    }
  }
  if (seconds >= 60) {
    for (i = 60; i <= seconds; seconds -= 60) {
      result[3] += 1;
    }
  }
  if (seconds >= 1) {
    for (i = 1; i <= seconds; seconds -= 1) {
      result[4] += 1;
    }
  }
  var aa = "";
  for (i = 0; i < result.length; i++) {
    if (result[i] != 0) {
    }
  }
  return aa;
}

console.log(formatDuration(31536000));

//1 year = 365 days = 8760 hours = 525600 minutes = 31536000 seconds

//https://www.codewars.com/kata/52742f58faf5485cae000b9a/solutions/javascript
