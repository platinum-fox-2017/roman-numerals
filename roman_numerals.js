//Roman Numerals - Challenge
/*
- definisikan angka arabic ke roman :
1 --> I
5 --> V
10 --> X
50 --> L
100 --> C
500 --> D
1000 --> M
- kemudian masukkan masing-masing tersebut ke dalam sebuah variabel, dan isinya array.
- 
*/

function to_roman (num) {
  var arabic = num;
  var roman = [["M",1000],["D",500],["CD",400],["C",100],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]];
  var hasil = "";
  
  for(var i=0; i<roman.length; i++){
	  var ulang = Math.floor(arabic / roman[i][1]);
	  while(arabic >= roman[i][1]){
		  hasil += roman[i][0].repeat(ulang);
		  arabic -= (roman[i][1] * ulang);
	  }
  }
  return hasil;
  
  
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
