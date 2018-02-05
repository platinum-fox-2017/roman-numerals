/*
 pertama initialisasi array number
 selanjutnya initialisasi array romawi yaitu bilangan romawi
 kemudia buat variabel simpan untuk menampung nilai string
 buat looping while jika nilai input besar sama dengan 1
 dan didalam looping while buat looping untuk mengecek nilai apakah ribuan ratusan dll
 dan selanjutnya jika nilai input lebih besar sama dengan number dengan index array yang di jalanin maka lakukan proses didalam stateman
 jika ada tampung nilai romawi sesuai nilai index kedalam variabel simpan
 selanjutnya kurangin nilai input romawi sesuai number index
 jika terpenuhi break jika tidak abaikan
*/


function to_roman (num) {
  var number=[1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var romawi=['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var simpan=''
  while(num>=1){
    for(let i=0;i<number.length;i++){
      if(num>=number[i]){
        simpan += romawi[i]
        num=num-number[i]
        break;
      }

    }
  }
  return simpan
}

// Drive code
// console.log('My totally sweet testing script for new roman\n')
// console.log('input | expected | actual')
// console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
