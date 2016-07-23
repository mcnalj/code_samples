function sumPrimes(value) {
	
	if (value <= 1) {
		return 0;
	}
 	var primes = [];
	var list = [];
	var isPrime = true;
	
	if (value == 2) {
		primes.push(value);
	}
	else if (value == 3) {
		primes.push(2, 3);
	}
	
	for (var j = 2; j <= value; j++) {
		
		for (var i = 2; i <= j; i++) {
			if (j % i === 0 && i < j) {
				break;
			} else if (j == i && value != 2 && value != 3) {
				primes.push(j);
			}
		}
	}
	
	return primes.reduce(function(a, b) {
		return (a + b);
	});
}


