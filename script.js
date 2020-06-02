var chr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','X','Y','Z', '!','@','#','$','%','^','&','*','_','-','+','<','>', '!','@','#','$','%','^','&','*','_','-','+','<','>','0','1','2','3','4','5','6','7','8','9', '0','1','2','3','4','5','6','7','8','9'];

function generate(){
	var num = document.getElementById("mySelect").value;
	var i=0;
	
	var str = "";
	while (i< num){
		var str1 = chr[Math.floor(Math.random() * chr.length)];
		str = str.concat(str1);
		i++;
	}	
	document.getElementById("passcode").innerHTML = str;
}

