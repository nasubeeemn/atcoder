function Main(input){
  var inp = input.split('\n');
  var h = parseInt(inp[0].split(' ')[0]); // 行数
  var w = parseInt(inp[0].split(' ')[1]); // 列数

  var board = [];
  for(var i = 0; i < h; i++){
    board.push(inp[i + 1].split(''));
  }

  // 主マスからの差分量
  //     　右、下、左、上、右下、左下、左上、右上
  var dx = [1, 0, -1,  0,  1,   -1,  -1,   1];
  var dy = [0, 1,  0, -1,  1,    1,  -1,  -1];

  for(var i = 0; i < h; i++){
    for(var j = 0; j < w; j++){
      if(board[i][j] === '#') continue; // 主マスが#のとき

      var num = 0;
      for(var d = 0; d < 8; d++){ // 主マスを囲む8マス
        var di = i + dy[d]; // 列方向
        var dj = j + dx[d]; // 行方向
        if(di < 0 || h <= di) continue; // board枠外のとき
        if(dj < 0 || w <= dj) continue; // board枠外のとき
        if(board[di][dj] === '#') num++;
      }
      board[i][j] = num;
    }
  }
  for(var i = 0; i < h; i++){
    console.log(board[i].join(''));
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));