function Main(input) {
	input = input.split("\n");
	var s = input[0].split("").sort();
	var t = input[1].split("").sort().reverse();
	var i = 0;	
	while(1){
        if( typeof t[i] === 'undefined'){
			console.log("No");
			break;
		}
		if( typeof s[i] === 'undefined'){
			console.log("Yes");
			break;
		}
		if ( s[i] == t[i] ){
          	i++;
        	continue; 
        }
		else if ( s[i] < t[i] ){
			console.log("Yes");
			break;
		}
      	else if ( s[i] > t[i] ){
        	console.log("No");
			break;
        }
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
