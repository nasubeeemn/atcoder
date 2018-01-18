function Main(input){
  var inp = input.split(' ');
  var A = parseInt(inp[0]);
  var B = parseInt(inp[1]);
  var C = parseInt(inp[2]);
  var D = parseInt(inp[3]);

  var L = A + B;
  var R = C + D;

  if(L > R){
    console.log('Left');
  } else if(L < R){
    console.log('Right');
  } else {
    console.log('Balanced');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));