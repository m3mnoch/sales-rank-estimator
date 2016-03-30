(function (window, document) {

	if (typeof window.head=='undefined') {
		// total overkill -- whatevs...  it's prolly cached.
		script = document.createElement('script');
		script.src = 'http://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js';
		script.onload = preload;
		document.body.appendChild(script);
	} else {
		preload();
	}

	function preload() {
		//"Help us improve our Author Pages";
		head.ready(function () {
            validate();
        });

		head.load(
	    	"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min.js"
		);

	}

	var validate = function() {
		// look for: "Help us improve our Author Pages";
		// says it's an author page.
		// else, look for sales rank.
		// says it's a book page.
		// if neither, pop up the amazon link for sherlock holmes.
		alert('working! ' + $("#SalesRank").text());
	}



}(this, this.document));
