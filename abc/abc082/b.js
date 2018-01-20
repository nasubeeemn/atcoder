function Main(input){
  var inp = input.split('\n');  // Windows版Nodejsでは \n -> \r\nにする
  var s = inp[0].split('');
  var t = inp[1].split('');

  var sortS = s.sort((a, b) => {  // 昇順にする
    return a < b ? -1 : 1;
  });
  sortS = sortS.join('');  // 配列を文字列にする

  var sortT = t.sort((a, b) => {  // 降順にする
    return a < b ? 1 : -1;
  });
  sortT = sortT.join('');  // 配列を文字列にする
  
  sortS < sortT ? console.log('Yes') : console.log('No');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
