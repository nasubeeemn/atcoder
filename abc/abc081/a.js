function Main(input){
  var inp = input.split('');

  var count = 0;
  for(var i of inp){
    i === '1' ? count += 1 : '';
  }
  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));