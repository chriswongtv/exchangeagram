lowestPrice("9780805371468");

function lowestPrice(ISBN) {
	// Get the lowest used price of this ISBN from Chegg
	$http({
		method: 'GET',
		url: 'https://hackingedu.chegg.com/hacking-edu/catalog/priced/byEan/9780805371468',
		header: {"Authorization" : "Basic UUNOVUhVekJUQ2huR0tOcktlQXhWa3BFc29kQXVLZWw6UmUydklRR1JQQzky bUtLdw=="}
	}).then(function successCallback(response) {
		var price = response.body.prices[2].price;
		console.log(price);
		return price;
	});
}

function highestPrice(ISBN) {
	// Get the highest unused new price of this ISBN from Chegg
	var price = 0;
	return price;
}

function priceOfDemand(ISBN, currentDemand) {
	// Get the highest point on the demand curve
	var countOfAllBuyers;
	var lowestPrice = lowestPrice(ISBN);

	// Get the lowest point on the demand curve
	var countOfAllSellers;
	if (countOfAllSellers > countOfAllBuyers) { // In case there are more sellers than buyers,
		// set the number of sellers equal to number of buyers.
		countOfAllSellers = countOfAllBuyers;
	}
	var countOfRemainingBuyers = countOfAllBuyers - countOfAllSellers;
	var highestPrice = highestPrice(ISBN);

	// Find the coefficient and gradient of the logarithmic equation from Wolfram Alpha
	// Plug in the currentDemand and determine the price
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