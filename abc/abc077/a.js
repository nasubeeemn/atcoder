function Main(input){
  var inp = input.split('\n');
  var a = inp[0];
  var b = inp[1];

  if(a[0] === b[2] && a[1] === b[1] && a[2] === b[0]){
    console.log('YES');
  } else {
    console.log('NO');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));