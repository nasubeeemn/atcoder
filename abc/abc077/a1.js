function Main(input){
  var inp = input.split('\n');
  var a = inp[0].trim();  // 行前後の改行コードを削除
  var b = inp[1].trim();  // 行前後の改行コードを削除

  var revb = b.split('').reverse().join('');
  a === revb ? console.log('YES') : console.log('NO');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));