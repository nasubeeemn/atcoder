function Main(input){
  var X = parseInt(input);
  var keta = Math.floor(Math.log10(X)) + 1;

  var fX = 0;
  var x = X;
  for(var i = 0; i < keta; i++){
    fX += x % 10;
    x = Math.floor(x / 10);
  }

  if(X % fX === 0){
    console.log('Yes');
  } else {
    console.log('No');
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));