# sales-rank-estimator
Estimates "Books per day" based on the Amazon Sales Rank


First, you will need to get the bookmarklet loaded in your browser.  Here's a handy snippet of HTML to help with that.
```
<a href="javascript:(function(){var jsCode = document.createElement('script');jsCode.setAttribute('src','https://cdn.rawgit.com/m3mnoch/sales-rank-estimator/master/bookmarklet-external.js');document.body.appendChild(jsCode);}());">This is the link.</a>
```

Second, browse to an Amazon book page and click your bookmarklet.

For example:
http://www.amazon.com/gp/product/B00X6KZ6SW/

At the time of this writing gets:
```
Sales Rank: 1925
Units per day: 92
Price per Unit: $1.99
Sales per day at 15%: $27.46
Sales per day at 70%: $128.16
```
