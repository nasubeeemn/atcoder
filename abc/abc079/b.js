function Main(input){
  var L0 = 2;
  var L1 = 1;

  for(var i = 0; i < input; i++){
    [L0, L1] = [L1, L0 + L1];
  }
  console.log(L0);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));