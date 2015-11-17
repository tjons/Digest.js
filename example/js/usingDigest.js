// (function () {
	Digest.sub("write to document", function(data){
		document.write(data + ", thanks to Digest.js");
	});

	setTimeout(function(){
		Digest.pub("write to document", Date.now());
	}, 300); //setTimeout call isn't important at all, but it aids the example
	function myFunc() { console.log("myFunc");}
	Digest.sub("123", myFunc);
	Digest.pub("123");
	Digest.unsub("123", myFunc);
// })();
