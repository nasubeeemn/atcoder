function Main(input){
  var inp = input.split('\n');
  var inp0 = inp[0].split(' ');
  var A = parseInt(inp0[0]);
  var B = parseInt(inp0[1]);

  var S = inp[1];

  var isResult = true;

  var arrayS = S.split('-');
  if(!(arrayS[0].length === A && arrayS[1].length === B)){
    isResult = false;
  }

  var arraySS = arrayS.reduce((a, b) => { return a + b; });

  for(var i of arraySS){
    if(!(i * 0 === 0)){
      isResult = false;
    }
  }

  isResult ? console.log('Yes') : console.log('No');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));