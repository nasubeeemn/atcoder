function Main(input) {
	input = input.split("\n");
	
	var s = input[0];
	var t = input[1];
	
	if(s == t) {
		console.log("No");
		return;
	}
	
	var alphabetSort = (function(a, b){
		a = a.toString().toLowerCase();
		b = b.toString().toLowerCase();
		if(a < b){
			return -1;
		}else if(a > b){
			return 1;
		}
		return 0;
	});
	
	var ss = s.split("").sort(alphabetSort).join();
	var rst = t.split("").sort(alphabetSort).reverse().join();
  console.log(ss);
  console.log(rst);

	var result = [ss, rst].sort(alphabetSort);
	//s'<t'ならばresult[0] = s'
	
    console.log(result[0] === ss ? "Yes" : "No");
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
