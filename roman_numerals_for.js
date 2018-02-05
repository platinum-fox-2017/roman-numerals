function to_roman(number) {
    // your implementation code here
    let romans = ['M', 'DC', 'D', 'CD', 'C', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    let arabics = [1000, 600, 500, 400, 100, 50, 40, 10, 9, 5, 4, 1]
    let resultRomantoArabic = ''
    let i = 0;
    // Melakukan Pengulangan Selama Panjang Kamus arabics
    for (let i = 0; i < arabics.length; i++) {
        for (let j = number % arabics[i]; j < number; number -= arabics[i]) {
            resultRomantoArabic += romans[i];
            number -= arabics[i];
        }
    }
    return resultRomantoArabic
}

console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))