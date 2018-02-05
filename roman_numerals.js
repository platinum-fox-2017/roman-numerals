//
// create var output as empty string
// create var repeat to contain repeating amount of roman numerals
// if num / 1000 rounded down is >= 1 then add the value as repeat
  // loop from 1 to repeat
  // add 'M' to output
  // reduce num by 1000 * repeat
// if num / 100 rounded down is >= 1 then add the value as var repeat
  // switch case repeat to add roman to output, from C to DM
  // reduce num by 100 * repeat
// if num / 10 rounded down is >= 1 then add the value as var repeat
  // switch case repeat to add roman to output, from X to XC
  // reduce num by 10 * repeat
// if num / 1 rounded down is >= 1 then add the value as var repeat
  // switch case repeat to add roman to output, from I to IX
  // reduce num by 5 * repeat
// return the output

function to_roman (num) {
  var output = '';
  var repeat;

  if (Math.floor(num /1000) >= 1){
    repeat = Math.floor(num /1000);
    for (var i = 1; i <= repeat; i++) {
      output += 'M';
      num = num - (1000 * repeat);
    }
  }

  if (Math.floor(num /100) >= 1){
    repeat = Math.floor(num /100);
    switch(repeat) {
      case 1 : output += 'C'; break;
      case 2 : output += 'CC'; break;
      case 3 : output += 'CCC'; break;
      case 4 : output += 'CD'; break;
      case 5 : output += 'D'; break;
      case 6 : output += 'DC'; break;
      case 7 : output += 'DCC'; break;
      case 8 : output += 'DCCC'; break;
      case 9 : output += 'CM'; break;
      default: output += '';
    }
    num = num - (100 * repeat);
  }
  if (Math.floor(num /10) >= 1){
    repeat = Math.floor(num /10);
    switch(repeat) {
      case 1 : output += 'X'; break;
      case 2 : output += 'XX'; break;
      case 3 : output += 'XXX'; break;
      case 4 : output += 'XL'; break;
      case 5 : output += 'L'; break;
      case 6 : output += 'LX'; break;
      case 7 : output += 'LXX'; break;
      case 8 : output += 'LXXX'; break;
      case 9 : output += 'XC'; break;
      default: output += '';
    }
    num = num - (10 * repeat);
  }
  if (Math.floor(num /1) >= 1){
    repeat = Math.floor(num /1);
    switch(repeat) {
      case 1 : output += 'I'; break;
      case 2 : output += 'II'; break;
      case 3 : output += 'III'; break;
      case 4 : output += 'IV'; break;
      case 5 : output += 'V'; break;
      case 6 : output += 'VI'; break;
      case 7 : output += 'VII'; break;
      case 8 : output += 'VIII'; break;
      case 9 : output += 'IX'; break;
      default: output += '';
    }
    num = num - (1 * repeat);
  }
  return output;
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
