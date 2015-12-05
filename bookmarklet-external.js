if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
	script = document.createElement('script');
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
	script.onload = doWork;
	document.body.appendChild(script);
} else {
	doWork();
}

function doWork() {

	var salesRankStr = $("#SalesRank").text();
	var salesRankLineArray = salesRankStr.split(/\r\n|\r|\n/g);
	//console.log(salesRankLineArray);

	salesRankInt = -1;

	for (var i = 0; i < salesRankLineArray.length; i++) {
		if (salesRankLineArray[i] !== undefined && salesRankLineArray[i].length > 1) {
			var salesRankSpaceArray = salesRankLineArray[i].split(" ");

			for (var j = 0; j < salesRankLineArray.length; j++) {
				if (salesRankSpaceArray[j] !== undefined && salesRankSpaceArray[j].length > 1 && salesRankSpaceArray[j].charAt(0) == "#") {
					salesRankInt = parseInt(salesRankSpaceArray[j].replace(/\D/g, ''));

				}
			}

			//salesRankInt = parseInt(salesRankSpaceArray[j].replace(/\D/g, ''));
		}

		if (salesRankInt > 0) break;
	}




	//salesRankStr = '#1,119';
	//salesRankInt = parseInt(salesRankStr.replace(/\D/g,''));

	alert("sales rank: " + salesRankInt);
}
