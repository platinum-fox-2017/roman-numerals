function to_roman (num) {
  var temp = num.toString();
  var balikan = '';

  var temp2 = temp.split('');
  var balikan = '';
  
  while (temp2.length > 0) {
    var observe = temp2[0];
    if (temp2.length == 4) {
      for(var i = 0; i < parseInt(observe); i++) {
        balikan = balikan + 'M';
      }
    } else if (temp2.length == 3) {
      if (parseInt(observe) > 5) {
        balikan = balikan + 'D';
        for (var i = 5; i < parseInt(observe); i++) {
          balikan = balikan + 'C';
        }
      } else {
        for (var i = parseInt(observe); i < 5; i++) {
          balikan = balikan + 'C';
        }
        balikan = balikan + 'D';
      }
    } else if (temp2.length == 2) {
      if (parseInt(observe) > 5) {
        balikan = balikan + 'L';
        for (var i = 5; i < parseInt(observe); i++) {
          balikan = balikan + 'X';
        }
      } else {
        if (parseInt(observe) <= 3) {
          for (var i = 0; i < parseInt(observe); i++) {
            balikan = balikan + 'X';
          }
        } else {
          for (var i = parseInt(observe); i < 5; i++) {
            balikan = balikan + 'X';
          }
          balikan = balikan + 'L';
        }
      }
    } else if (temp2.length == 1) {
      if (parseInt(observe) == 9) {
        balikan = balikan + 'IX';
      }
      else if (parseInt(observe) > 5) {
        balikan = balikan + 'V';
        for (var i = 5; i < parseInt(observe); i++) {
          balikan = balikan + 'I';
        }
      } else if (parseInt(observe) > 3 && parseInt(observe) < 5){
        for (var i = parseInt(observe); i < 5; i++) {
          balikan = balikan + 'I';
        }
        balikan = balikan + 'V';
      } else {
        for (var i = 0; i < parseInt(observe); i++) {
          balikan = balikan + 'I';
        }
      }
    }
    temp2.shift();
  }

  return balikan;
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