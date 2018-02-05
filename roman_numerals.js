function to_roman (num) {
  const numeral = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const roman = ['M','DM','D','CD','C','LC','L','XL','X','VX','V','IV','I']
  let result = ''
  for(let i = 0 ; i < numeral.length ; i ++){
    if(num >= numeral[i]){
      result += roman[i]
      num -= numeral[i]
      i = -1
    }
  }
  return result
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
