// Solution 1 - using switch case
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


// Solution 2 - Using loop of array
function to_roman(num) {
  var romanArray = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
  var numberArray = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
  var strRoman = "";

  for(var i =numberArray.length-1; i>=0;i--){
    while(Math.floor(num/numberArray[i])>0){
      strRoman += romanArray[i];
      num-=numberArray[i];
    }
  }
  return strRoman;
}

// Solution 3 - Using loop of array
function to_roman(num) {
  var romanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var strRoman = "";

  for(var i in romanObject){
    // while(Math.floor(num/romanObject[i])>0){
    //   strRoman += i;
    //   num-=romanObject[i];
    // }
    for(num; num >= romanObject[i]; num-=romanObject[i]){
      strRoman += i;
    }

  }
  return strRoman;
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
