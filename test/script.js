// alert("Hello");


fetch('https://www.mercadobitcoin.net/api/BTC/day-summary/2013/6/20/').then(function (response) {
	// The API call was successful!
	return response.json();
}).then(function (data) {
	// This is the JSON from our response
	console.log(data);
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});