function to_roman(num) {
  var result = '';
  var listDecimalandRoman = [
    {decimal: 1, roman : 'I'},
    {decimal: 4, roman : 'IV'},
    {decimal: 5, roman : 'V'},
    {decimal: 9, roman : 'IX'},
    {decimal: 10, roman : 'X'},
    {decimal: 40, roman : 'XL'},
    {decimal: 50, roman : 'L'},
    {decimal: 90, roman : 'XC'},
    {decimal: 100, roman : 'C'},
    {decimal: 400, roman : 'CD'},
    {decimal: 500, roman : 'D'},
    {decimal: 900, roman : 'CM'},
    {decimal: 1000, roman : 'M'}
  ];

  while(num != 0) {
    for (var i = listDecimalandRoman.length - 1; i >= 0; i--) {
      if (listDecimalandRoman[i].decimal <= num) {
        result += listDecimalandRoman[i].roman;
        num -= listDecimalandRoman[i].decimal;
      }
    }
  }

  return result;
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
