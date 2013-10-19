
// Let's include the async library:

var async = require('./lib/async');

// Then let's experiment with async's .parallel() function

// Parallel doesn't wait for the previous function to finish;
// rather it starts as many things as it can simultaniously.
// JavaScript is still single-threaded, so two functions won't
// run at the exact same time, but they also won't wait for each other.
// This is great for long-running tasks such as time consuming
// database queries or api calls.

// Here's an example of .parallel()

/* e.g.

async.parallel([
	function task1(callback) {
		// as soon as this task is done done, we call 'callback'
		// no errors so first parameter is blank
		callback(null,'task1results');
	},
	function task2(callback) {
		// we finish and call the callback too
		callback(null,'task2results');
	}
], function (err, arrayOfResults) {
	if (err) {
		return console.log('it broke');
	}
	console.log('it worked and returned');
	console.log(arrayOfResults);
});

*/

var myCode = function () {
	var start = new Date();

	// Here's my solution. Is yours similar?

	async.parallel([
		function (callback) {
			dostep1(function (err, result1) {
				callback(err, result1);
			});
		},
		function (callback) {
			dostep2(function (err, result2) {
				callback(err, result2);
			});
		},
		function (callback) {
			dostep3(function (err, result3) {
				callback(err, result3);
			});
		}
	], function (err, results) {
		if (err) {
			return console.log('error');
		}
		console.log(results[0]);
		console.log(results[1]);
		console.log(results[2]);
		var end = new Date();
		console.log((end - start)/1000 + ' seconds');
	});

	// end here

};


var myAlternateCode = function () {

	// Here's an alternate solution. Is yours similar?

	var start = new Date();
	async.parallel([
		dostep1,
		dostep2,
		dostep3
	], function (err, results) {
		if (err) {
			return console.log('error');
		}
		console.log(results);
		var end = new Date();
		console.log((end - start)/1000 + ' seconds');
	});

	// end here

};


var dostep1 = function (callback) {
	setTimeout(function () {
		callback(null, 'step1');
	}, 2000); // miliseconds
};

var dostep2 = function (callback) {
	setTimeout(function () {
		callback(null, 'step2');
	}, 2000); // miliseconds
};

var dostep3 = function (callback) {
	setTimeout(function () {
		callback(null, 'step3');
	}, 2000); // miliseconds
};

myAlternateCode();
