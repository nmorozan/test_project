const MOCKS = {'06-04-2017': 'mocks/06-04-2017.json',
			   '07-04-2017': 'mocks/07-04-2017.json',
			   '1M': 'mocks/month.json'}; //example

function getSensors(date) {
	....

	if (date) {
		url = MOCKS[date];
	} else {
		url += `?southwestLat=${southwestLat}&southwestLong=${southwestLong}&northeastLat=${northeastLat}&northeastLong=${northeastLong}`;
		options = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'apikey': API_KEY
			}
		};
	}

	fetch(url, options).then((response) => {
		return response.text();
	}).then((data) => {
		....
	});

}
