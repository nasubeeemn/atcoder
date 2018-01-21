function Main(input){
  var N = parseInt(input.split('\n')[0]); // count: A + B
  var K = parseInt(input.split('\n')[1]); // screen + K

  var S = 1; //screen

  for(var i = 0; i < N; i++){
    var A = 2 * S;
    var B = S + K;
    (A < B) ? S = A : S = B;
  }
  console.log(S);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));