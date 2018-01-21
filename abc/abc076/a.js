function Main(input){
  var inp = input.split('\n');
  var R = inp[0];
  var G = inp[1];

  console.log(2 * G - R);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));