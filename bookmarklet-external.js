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
	salesRankStr = '#1,119';
	salesRankInt = parseInt(salesRank.replace(/\D/g,''));
    
    alert("sales rank try #1: " + salesRankInt);
}
