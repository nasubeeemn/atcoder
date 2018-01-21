function Main(input){
  var A = input.split(' ')[0];
  var B = input.split(' ')[1];
  var C = input.split(' ')[2];

  var ans = 0;

  if((A === B) && (A !== C)) ans = parseInt(C);
  if((A === C) && (A !== B)) ans = parseInt(B);
  if((B === C) && (B !== A)) ans = parseInt(A);

  console.log(ans);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));