
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

	// TODO: start here and rewrite this function to use async.series()
	// When you're done, run this file and ensure you see 'step1' then 'step2' then 'step3'

	dostep1(function (err, result1) {
		dostep2(function (err, result2) {
			dostep3(function (err, result3) {
				console.log(result1);
				console.log(result2);
				console.log(result3);
			});
		});
	});

	// TODO: end here, rewrite this function to use async.waterfall()

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
