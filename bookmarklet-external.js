if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
	// total overkill -- whatevs...  it's prolly cached.
	script = document.createElement('script');
	script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';
	script.onload = doWork;
	document.body.appendChild(script);
} else {
	doWork();
}

function doWork() {

	// ----------------------------------------------------------
	// pull the sales rank from the page
	var salesRankStr = $("#SalesRank").text();
	var salesPrice = parseFloat($(".a-color-price").first().text().replace(/\$/g, ''));

	var salesRankLineArray = salesRankStr.split(/\r\n|\r|\n/g);

	salesRankInt = -1;

	for (var i = 0; i < salesRankLineArray.length; i++) {
		if (salesRankLineArray[i] !== undefined && salesRankLineArray[i].length > 1) {
			var salesRankSpaceArray = salesRankLineArray[i].split(" ");

			for (var j = 0; j < salesRankLineArray.length; j++) {
				if (salesRankSpaceArray[j] !== undefined && salesRankSpaceArray[j].length > 1 && salesRankSpaceArray[j].charAt(0) == "#") {
					salesRankInt = parseInt(salesRankSpaceArray[j].replace(/\D/g, ''));
				}
			}
		}

		if (salesRankInt > 0) break;
	}

	var notificationMessage = "Sales Rank: " + salesRankInt + "\nUnits per day: ";


	// ----------------------------------------------------------
	// calculate the sales based on that rank.
	var bookSalesPerDay = 0;

	if(salesRankInt>=1 && salesRankInt<=5) bookSalesPerDay = ((7000-4000)/5)*(5-salesRankInt) + 4000;
	if(salesRankInt>=6 && salesRankInt<=20) bookSalesPerDay = ((4000-3000)/(20-5))*(20-salesRankInt) + 3000;
	if(salesRankInt>=21 && salesRankInt<=35) bookSalesPerDay = ((3000-2000)/(35-20))*(35-salesRankInt) + 2000;
	if(salesRankInt>=36 && salesRankInt<=100) bookSalesPerDay = ((2000 - 1000)/(100-35))*(100-salesRankInt) + 1000;
	if(salesRankInt>=101 && salesRankInt<=200) bookSalesPerDay = ((1000-500)/(200-100))*(200-salesRankInt) + 500;
	if(salesRankInt>=201 && salesRankInt<=350) bookSalesPerDay = ((500-250)/(350-200))*(350-salesRankInt) + 250;
	if(salesRankInt>=351 && salesRankInt<=500) bookSalesPerDay = ((250-175)/(500-350))*(500-salesRankInt) + 175;
	if(salesRankInt>=501 && salesRankInt<=750) bookSalesPerDay = ((175-120)/(750-500))*(750-salesRankInt) + 120;
	if(salesRankInt>=751 && salesRankInt<=1500) bookSalesPerDay = ((120-100)/(1500-750))*(1500-salesRankInt) + 100;
	if(salesRankInt>=1501 && salesRankInt<=3000) bookSalesPerDay = ((100-70)/(3000-1500))*(3000-salesRankInt) + 70;
	if(salesRankInt>=3001 && salesRankInt<=5500) bookSalesPerDay = ((70-25)/(5500-3000))*(5500-salesRankInt) + 25;
	if(salesRankInt>=5501 && salesRankInt<=10000) bookSalesPerDay = ((25-15)/(10000-5500))*(10000-salesRankInt) + 15;
	if(salesRankInt>=10001 && salesRankInt<=50000) bookSalesPerDay = ((15-5)/(50000-10000))*(50000-salesRankInt) + 5;
	if(salesRankInt>=50001 && salesRankInt<=100000) bookSalesPerDay = ((5-1)/(100000-50000))*(100000-salesRankInt) + 1;
	if(salesRankInt<1 || salesRankInt>100000) bookSalesPerDay=0;


	bookSalesPerDay = Math.round(bookSalesPerDay);
	if (bookSalesPerDay < 1) {
		notificationMessage += "Less than one";

	} else {
		notificationMessage += bookSalesPerDay;

	}

	notificationMessage += "\nPrice per Unit: $" + salesPrice;
	notificationMessage += "\nSales per day at 15%: $" + parseFloat(salesPrice * bookSalesPerDay * .15).toFixed(2);
	notificationMessage += "\nSales per day at 70%: $" + parseFloat(salesPrice * bookSalesPerDay * .7).toFixed(2);

	alert(notificationMessage);
}
