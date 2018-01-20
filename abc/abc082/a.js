function Main(input){
  var inp = input.split(' ');
  var a = parseInt(inp[0]);
  var b = parseInt(inp[1]);
  
  var total = a + b;
  var average = Math.round(total / 2);
  console.log(average);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));