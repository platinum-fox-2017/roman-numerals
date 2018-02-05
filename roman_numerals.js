function to_roman (num) {
  var angkaRomawi = [['M',1000], ['D',500] , ['CD', 400],['C',100], ['L',50], ['XL',40], ['X',10], ['IX',9] ,['V',5], ['IV',4], ['I',1]];
  var strBalikan  = '';

  while (num > 0) {
      var angkaTerbesar = 0;
      for(var i = 0; i < angkaRomawi.length; i++) {
          if(num >= angkaRomawi[i][1]) {
              if (angkaRomawi[i][1] > angkaTerbesar) {
                  angkaTerbesar = angkaRomawi[i][1]
                  strBalikan = strBalikan + angkaRomawi[i][0];
              }
          }
      }
      num = num - angkaTerbesar;        
  }

  return strBalikan;
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