function to_roman(number) {
  // your implementation code here
  let romans = ['M', 'DC', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let arabics = [1000, 600, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
  let resultRomantoArabic = ''
  let i = 0;
  // Melakukan Pengulangan Selama Panjang Kamus arabics
  while (i < arabics.length) {
    while (number % arabics[i] < number) {
      resultRomantoArabic += romans[i];
      number -= arabics[i];
    }
    i++
  }
  return resultRomantoArabic
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
