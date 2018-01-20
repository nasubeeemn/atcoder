function Main(input){
  var inp = input.split(' ');
  var X = inp[0];
  // 'A'の文字コードは65。'A'を10とするために65-10=55を引く
  var Xc = inp[0].charCodeAt() - 55;

  var Y = inp[1];
  var Yc = inp[1].charCodeAt() - 55;

  if(Xc < Yc){
    console.log('<');
  } else if(Xc > Yc){
    console.log('>');
  } else {
    console.log('=');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));