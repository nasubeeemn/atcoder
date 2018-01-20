function Main(input){
  var N = parseInt(input.split(' ')[0]);
  var A = parseInt(input.split(' ')[1]);
  var B = parseInt(input.split(' ')[2]);

  var p1 = A * N;
  var p2 = B;

  var result = p1 <= p2 ? p1 : p2;
  console.log(result);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));