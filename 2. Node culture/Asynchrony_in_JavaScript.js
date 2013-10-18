
var myCode = function () {
	console.log('JavaScript is single-threaded');
	console.log('both in a browser and in node');
		console.log('');

	longRunningTask(function (err) {
		console.log('When it\'s done we pick right back up');
		console.log('and the engine didn\'t have to wait.');

		console.log('');
		console.log('Asynchrony but without threads.');
		console.log('Nice.');
	})
};


var longRunningTask = function (callback) {
	console.log('When we call a long running task we don\'t want to lock up the browser');
	console.log('or halt other requests');
	console.log('even if completing this task takes ...');
	setTimeout(function () {
		console.log(' ... a long time');
		console.log('even if it takes a very, very ...');
		setTimeout(function () {
			console.log(' ... very ...');
			setTimeout(function () {
				console.log(' ... very long time.');
				console.log('');
				setTimeout(function () {
					callback(null);
				}, 1000);
			});
		}, 5000);
	}, 2000); // miliseconds
};

myCode();
