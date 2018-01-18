function Main(input){
  var M = input.split('\n');
  M = parseInt(M[0]);

  console.log(48 - M);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
