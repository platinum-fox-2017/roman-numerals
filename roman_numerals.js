class RomanNumerals{
  constructor(nilai){
      this.kamus = nilai
      this.hasil = ""
  }

  to_roman(value){
      for(let i = value; i >= 0; i--){
          const result = this.kamus.filter(kamu =>{
              let pembagian = value / kamu.digits

              if(pembagian >= 1){
                  return kamu
              }
          })
          this.hasil += result[0].romanNumeral
          value -= result[0].digits
          
          if(value === 0){
              break;
          }
      }

      return this.hasil
  }
}

let nilai = [{
  romanNumeral : "M",
  digits : 1000,
},
{
  romanNumeral : "MC",
  digits : 900,
},
{
  romanNumeral : "D",
  digits : 500,
},
{
  romanNumeral : "CD",
  digits : 400,
},
{
  romanNumeral : "C",
  digits : 100,
},
{
  romanNumeral : "CX",
  digits : 90,
},
{
  romanNumeral : "L",
  digits : 50,
},
{
  romanNumeral : "XL",
  digits : 40,
},
{
  romanNumeral : "X",
  digits : 10,
},
{
  romanNumeral : "XI",
  digits : 9,
},
{
  romanNumeral : "V",
  digits : 5,
},
{
  romanNumeral : "IV",
  digits : 4,
},
{
  romanNumeral : "I",
  digits : 1,
}]

let romanNumer = new RomanNumerals(nilai)

// console.log(romanNumer.to_roman(4))
// console.log(romanNumer.to_roman(9))
console.log(romanNumer.to_roman(23))
// console.log(romanNumer.to_roman(1453))
// console.log(romanNumer.to_roman(1646))
