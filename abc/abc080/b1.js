function Main(input){
  var X = parseInt(input);
  
  var fX = 0;
  var x = X;
  while(x > 0){
    fX += x % 10;
    x = Math.floor(x / 10);
  }
  (X % fX === 0) ? console.log('Yes') : console.log('No');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));