'use strict'
// Pseudocode
// 1. Buat kamus yang mendefinisikan angka romawi
// 2. Buat kamus yang mendefinisikan angka arab
// 3. Buat kondisi batas untuk input angka maksimum 3000
// 4. Buat pengulangan sejumlah angka arab yang disimpan di dalam kamus
// 5. Buat looping untuk membandingkan angka input dengan kamus angka arab yang memiliki nilai dengan selisih terdekat
// 6. Tampung angka romawi yang cocok dengan angka arab yang sudah dibandingkan pada langkah sebelumnya

function to_roman (num) {
  // your implementation code here
  let romawi = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
  let arabic = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
  let result = '';
  
  if( num > 3000 ) {
    return `Maaf maksimal nilai input adalah 3000`
  } else {
    for (let i = arabic.length-1; i >= 0; i--) {
      while( num >= arabic[i] ) {
          result += romawi[i]
          num -= arabic[i]
      }
    }
    return result  
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
