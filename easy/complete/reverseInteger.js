// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  var sign = 1;
  if (x < 0) {
      sign = -1;
      x = x * -1;
  }
  var digits = [];
  while (x > 0) {
      var digit = x % 10;
      digits.push(digit);
      x = Math.floor(x / 10);
  }
  digits = digits.reverse();

  var total = 0;
  for (var i = 0; i < digits.length; i++) {
    total += digits[i] * 10 ** i;
  }
  if (total < -1 * (2 ** 31) || total > 2 ** 31 - 1) {
    return 0;
  }
  return total * sign;
};