/*
input: numbers 1 - 3000
process:
output: strings

*/

function to_roman (num) {
  var numArr = num.toString().split('').reverse();
  // console.log(numArr);
  var roman = ["I", "V", "X", "L", "C", "D", "M"];
  // [
  //   { 1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' }
  // ];
  var result = [];
  
  var moveDigitBy = 2;
  for(var i = 0; i < numArr.length; i++) {
    switch(Number(numArr[i])) {
      case 1:
      case 2:
      case 3: result.push(roman[i*moveDigitBy].repeat(numArr[i]));
        break;
      case 4: result.push(roman[i*moveDigitBy] + roman[i*moveDigitBy+1]);
        break;
      case 5: result.push(roman[i*moveDigitBy+1]);
        break;
      case 6:
      case 7:
      case 8: result.push(roman[i*moveDigitBy+1] + roman[i*moveDigitBy].repeat(numArr[i]-5));
        break;
      case 9: result.push(roman[i*moveDigitBy] + roman[i*moveDigitBy+2]);
        break;
    }
  }

  // console.log(result);
  return result.reverse().join('');
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))