function to_roman (num) {
/*
  let numeral=''
    let arabic = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    
    for(let i=0; i<roman.length; i++){
        while(num>=arabic[i]){
            numeral+=roman[i];
            num-=arabic[i];
        }
    }
    return numeral;
*/

//using array of object

    let objnumeral =[{
            arabic: 1000,
            roman:'M'
        },{
            arabic: 900,
            roman:'CM'
        },{
            arabic: 500,
            roman:'D'
        },{
            arabic: 400,
            roman:'CD'
        },{
            arabic: 100,
            roman:'C'
        },{
            arabic: 90,
            roman:'XC'
        },{
            arabic: 50,
            roman:'L'
        },{
            arabic: 40,
            roman:'XL'
        },{
            arabic: 10,
            roman:'X'
        },{
            arabic: 9,
            roman:'IX'
        },{
            arabic: 5,
            roman:'V'
        },{
            arabic: 4,
            roman:'IV'
        },{
            arabic: 1,
            roman:'I'
        },]
    let result=''
    for(let i=0; i<objnumeral.length; i++){
        while(num>=objnumeral[i].arabic){
            result+=objnumeral[i].roman
            num-=objnumeral[i].arabic
        }
    }
    return result
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
