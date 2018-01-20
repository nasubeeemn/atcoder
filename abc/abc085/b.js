// inputに入力データ全体が入る
function Main(input) {
	var input = input.split('\n')
	var N = parseInt(input[0])
	var d = input.slice(1)
	console.log(d);
	d = d.map(function (x) {
	    return parseInt(x, 10); 
	});

	//10, 9, 8...
	d.sort(function(a,b){
        if( a < b ) return 1;
        if( a > b ) return -1;
        return 0;
	});

	d = d.filter(function(item, pos) {
    	return d.indexOf(item) == pos;
	})

	var lastMochi = d[0],
		c = 1	
	for(var i = 1; i < d.length; i++) {
		var mochi = d[i]
		if(mochi < lastMochi) c++
		else break
	}

	console.log("" + c)
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
