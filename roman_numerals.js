function to_roman (num) {
  // your implementation code here
  var arrNum = num.toString().split("").reverse();
  var romanNum = [];
  var romanArray = ["I","V","X","L","C","D","M"];
  for(var i = 0; i < arrNum.length; i++){
    //console.log("ini: "+arrNum[i])
    switch(parseInt(arrNum[i])){
      case 1:
      case 2:
      case 3:
      romanNum.push(romanArray[i*2].repeat(arrNum[i]));
      break;
      case 4:
      romanNum.push(romanArray[i*2]+romanArray[i*2+1]);
      break;
      case 5:
      romanNum.push(romanArray[i*2+1]);
      break;
      case 6:
      case 7:
      case 8:
      romanNum.push(romanArray[i*2+1]+romanArray[i*2].repeat(arrNum[i]-5));
      break;
      case 9:
      romanNum.push(romanArray[i*2]+romanArray[i*2+2]);
      break;
    }
  }
  return romanNum.reverse().join("");
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
