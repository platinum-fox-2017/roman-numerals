function to_roman (num) {
  // your implementation code here
  let romanNumeral = ['M', 'MC', 'D', 'DC', 'C', 'CX', 'L', 'LX', 'X', 'IX', 'V', 'IV', 'I']
  let arabicNumeral = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  if (num <=0) {
    return ""
  }else{
    for (let [index, value] of arabicNumeral.entries()) {
      // console.log(index,value)
      if (num >= value) {
        return romanNumeral[index] + to_roman(num - value)
      }
    }
  }
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
