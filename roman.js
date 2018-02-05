function to_roman(num) {
  const angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let tempRoman = ''

  for (var i = 0; i < angka.length; i++) {
    while(num >= angka[i]) {
      // console.log(angka[i]);
      tempRoman += roman[i]
      num -= angka[i]
    }
  }
return tempRoman
}

console.log(to_roman(1034));
