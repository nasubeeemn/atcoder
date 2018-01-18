function Main(input){
  var N = parseInt(input.split(' ')[0]);
  var A = parseInt(input.split(' ')[1]);
  var B = parseInt(input.split(' ')[2]);

  var sum = 0;
  for(var i = 1; i <= N; i++){
    var is = i.toString().split('')
      .map((a) => parseInt(a, 10)).reduce((b, c) => { return b + c });
    
    if(A <= is && is <= B){
      sum += i;
    }
  }
  console.log(sum);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));