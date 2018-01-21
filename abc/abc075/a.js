function Main(input){
  var A = parseInt(input.split(' ')[0], 10);
  var B = parseInt(input.split(' ')[1], 10);
  var C = parseInt(input.split(' ')[2], 10);

  if(A === B){
    console.log(C);
  } else if(A === C){
    console.log(B);
  } else {
    console.log(A);
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));