function to_roman (num) {
  // your implementation code here

    var romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let resArr = [];

    // for(let i = 0; i < romanMatrix.length; i++) {
    //     if(num >= romanMatrix[i][0]) {
    //         resArr.push(romanMatrix[i][1]);
    //         num -= romanMatrix[i][0];
    //         i = -1;
    //     }
    // }

    let i = 0;
    while (i < romanMatrix.length) {
        if(num >= romanMatrix[i][0]) {
            resArr.push(romanMatrix[i][1]);
            num -= romanMatrix[i][0];
            i = -1;
        }
        i++
    }

    return resArr.join('')

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
