
// Let's include the async library:

var async = require('./lib/async');

// Then let's experiment with async's .series() function

// Rather than passing the results into the next function
// .series() collects the results of each function
// and passes it into the last function

/* e.g.

async.series([
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

	// Here's my solution. Is yours similar?

	async.series([
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
		var result1 = results[0];
		var result2 = results[1];
		var result3 = results[2];
		console.log(result1);
		console.log(result2);
		console.log(result3);
	});

	// end here

};


var myAlternateCode = function () {

	// Here's an alternate solution. Is yours similar?

	async.series([
		dostep1,
		dostep2,
		dostep3
	], function (err, results) {
		if (err) {
			return console.log('error');
		}
		console.log(results);
	});

	// end here

};


var dostep1 = function (callback) {
	callback(null, 'step1');
};

var dostep2 = function (callback) {
	callback(null, 'step2');
};

var dostep3 = function (callback) {
	callback(null, 'step3');
};

myCode();
