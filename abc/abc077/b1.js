function Main(input){
  var num = parseInt(input);

  for(var i = 1; i < num; i++){
    if((i * i) > num){
      console.log((i - 1) * (i - 1));
      break;
    }
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));