if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
	script = document.createElement( 'script' );
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js'; 
	script.onload=doWork;
	document.body.appendChild(script);
} 
else {
    doWork();
}
 
function doWork() {

	var salesRankStr = $("#SalesRank").text();
	var salesRankArray = salesRankStr.split(/\r\n|\r|\n/g);
	salesRankInt = -1;

	for (var i=0; i < salesRankArray.length; i++) {
		if (salesRankArray[0] !== undefined && salesRankArray[0].length > 1) {
			salesRankInt = parseInt(salesRankArray[0].replace(/\D/g,''));
		}
	}




	//salesRankStr = '#1,119';
	//salesRankInt = parseInt(salesRankStr.replace(/\D/g,''));
    
    alert("sales rank: " + salesRankInt);
}
