function to_roman (num) {
  // your implementation code here
  const roman = ["M","CM","DC","D","CD","C","XC","LC","L","XL","X","IX","VI","V","IV","I"]
  const arabic = [1000,900,600,500,400,100,90,60,50,40,10,9,6,5,4,1]
  let hasilKonversi = ''
  if(num>3000 || num<1){
      return "Number is out of range"
  }else{
      for(let i =0;i<roman.length;i++){
          // console.log(arabic[i])
          while(arabic[i]<=num){
              hasilKonversi += roman[i]
              // console.log(hasilKonversi)
              num-= arabic[i]
          }  
      }
      return hasilKonversi
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
