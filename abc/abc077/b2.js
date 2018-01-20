function Main(input){
  var num = parseInt(input);

  var n = parseInt(Math.sqrt(num));
  console.log(n * n);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));