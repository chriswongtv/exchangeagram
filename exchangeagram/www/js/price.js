function lowestPrice(ISBN) {
	// TO DO: Get the lowest used price of this ISBN from Chegg
	var price = 0;
	$http({
		method: 'GET',
		url: 'https://hackingedu.chegg.com/hacking-edu/catalog/priced/byEan/9780805371468',
		headers: {"authorization" : "Basic QzhPYXFiQVBhdlpmQXBoS05MUTdvckdaZUVQOWowYlc6YVJVRmloQTJMWklN MVVjMQ=="}
	}).then(function successCallback(response) {
		price = response.body.prices[2].price;
		console.log(price);
	});
	return price;
}

function highestPrice(ISBN) {
	// TO DO: Get the highest unused new price of this ISBN from Chegg
	var price = 0;
	return price;
}

function priceOfDemand(ISBN, currentDemand, currentPeriod, previousPeriod) {
	// Get the highest point on the demand curve
	var countOfAllBuyers = numberOfBuyers(ISBN, currentPeriod);

	var lowestPrice = lowestPrice(ISBN);

	// Get the lowest point on the demand curve
	var countOfAllSellers = numberOfSellers(ISBN, previousPeriod);
	if (countOfAllSellers > countOfAllBuyers) { // In case there are more sellers than buyers,
		// set the number of sellers equal to number of buyers.
		countOfAllSellers = countOfAllBuyers;
	}
	var countOfRemainingBuyers = countOfAllBuyers - countOfAllSellers;
	var highestPrice = highestPrice(ISBN);

	// Find the coefficient and gradient of the logarithmic equation from Wolfram Alpha
	var coefficient = 0;
	var gradient = 0;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (xhttp.readyState == 4 && xhttp.status == 200) {
	    var xmlDoc = xml.responseXML;
		var demandEquation = xmlDoc.getElementsByTagName('pod')[1].getElementsByTagName('subpod')[0].getElementsByTagName('plaintext')[0].childNodes[0].nodeValue;
		coefficient = demandEquation.substring(0, demandEquation.indexOf(' '));
		gradient = demandEquation.substring(demandEquation.indexOf('(')+1, demandEquation.indexOf(' x'));
	  }
	}
	var x1 = lowestPrice;
	var y1 = countOfAllBuyers;
	var x2 = highestPrice;
	var y2 = countOfRemainingBuyers;
	xhttp.open("GET", "http://api.wolframalpha.com/v2/query?appid=XX792W-GH5XJEEL8V&input=log%20fit%20%7B" + x1 + "%2C" + y1 + "%7D%2C%7B" + x2 + "%2C" + y2 + "%7D&format=image,plaintext", true);
	xhttp.send();

	// Plug in the currentDemand and determine the price
	var price = ( Math.exp(currentDemand / coefficient) ) / gradient;
	return price;
}

function conditionedPrice(ISBN, worth, hasLiquidDamage, hasNotations) {
	var reducedRate = 1;
	if (hasLiquidDamage) {
		reducedRate = lowestPrice(ISBN) / highestPrice(ISBN);
	} else if (hasNotations) {
		reducedRate = (1 + (lowestPrice(ISBN) / highestPrice(ISBN))) / 2;
	}
	return reducedRate * worth;
}