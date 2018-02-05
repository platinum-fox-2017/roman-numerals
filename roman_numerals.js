function to_roman(num) {
  var angkaArab = [1,4,5,9,10,40,50,100,400,500,900,1000];
  var angkaromawi = ['I','IV','V','IX','X','XL','L','C','CD','D','CM','M'];

  var getRoman = '';

  var compareNumber = num;
  for(var x=3000; x>=0; x--){
    for(var i=angkaArab.length-1; i>=0; i--){
      if(compareNumber >= angkaArab[i]){
        compareNumber = compareNumber-angkaArab[i];
        getRoman += angkaromawi[i];
      }
    }
  }
  // console.log(compareNumber);
  // console.log(getRoman);
  return getRoman;
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


console.log(to_roman(1453));