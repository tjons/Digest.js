(function () {
	Digest.sub("write to document", function(data){
		document.write(data + ", thanks to Digest.js");
	});

	setTimeout(function(){
		Digest.pub("write to document", Date.now());
	}, 3000);
})();
