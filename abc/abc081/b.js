function Main(input){
  var inp = input.split('\n');
  var N = parseInt(inp[0]);
  var A = inp[1].split(' ').map((i) => { return parseInt(i); });

  var count = 0;
  while(isPlume(A)){
    count++;
    A = A.map((i) => {
      return Math.floor(i / 2);
    });
  }

  function isPlume(A){
    var flag = true;
    for(var i of A){
      (i % 2 === 0) ? '' : flag = false;
    }
    return flag;
  }
  
  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));