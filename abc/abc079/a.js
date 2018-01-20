function Main(input){
  var isGood = new RegExp('(\\d)(\\1)(\\1)').test(input);
  isGood ? console.log('Yes') : console.log('No');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));