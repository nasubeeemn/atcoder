function Main1(input){
  var s = input.split('');
  s[3] = "8";
  console.log(s.join(''));
}

function Main2(input){
  var S = input;
  console.log('%s', '2018' + S.substr(4));
}

function Main3(input){
  console.log('2018/01/' + input.substr(8));
}

function Main4(input) {
  arr = input.split('');
  if (arr[3] = '7') {
    arr.splice(3, 1);
    arr.splice(3, 0, '8');
  }
  var str = arr.join('');
  console.log(str);
}

function Main5(input){
  var a = input.substring(8,10);
  console.log('2018/01/' + a);
}

Main1(require("fs").readFileSync("/dev/stdin", "utf8"));
