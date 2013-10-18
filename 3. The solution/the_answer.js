
// We're going to learn the async library
// https://github.com/caolan/async

// The async library is a control flow utility that lets us get rid of the airplane wing

// Let's include the library:

var async = require('./lib/async');

// Now we can leverage the library to make our control flow easier.

// The .waterfall() method takes in two parameters:
//   - an array of tasks to do
//   - a callback when they're all done or when any of them fail

// .waterfall() passes the results of each function to the next function

/* e.g.

async.waterfall([
	function task1(callback) {
		// as soon as this task is done done, we call 'callback'
		// no errors so first parameter is blank
		callback(null,'task1results');
	},
	function task2(task1results, callback) {
		// we finish and call the callback too
		callback(null,'task2results');
	}
], function (err, task2results) {
	if (err) {
		return console.log('it broke');
	}
	return console.log('it worked and returned '+task2results);	
});

*/

var myCode = function () {
	console.log('starting');

	// Here's my solution. Is yours similar?

	async.waterfall([
		function (callback) {
			dostep1(function (err) {
				callback(err);
			});
		},
		function (callback) {
			dostep2(function (err) {
				callback(err);
			});
		},
		function (callback) {
			dostep3(function (err) {
				callback(err);
			});
		}
	], function (err, result) {
		if (err) {
			return console.log('error');
		}
		console.log('all done');
	});

	// end here

};


var myAlternateCode = function () {
	console.log('starting');

	// Here's an alternate solution. Is yours similar?

	async.waterfall([
		dostep1,
		dostep2,
		dostep3
	], function (err, result) {
		if (err) {
			return console.log('error');
		}
		console.log('all done');
	});

	// end here

};


var dostep1 = function (callback) {
	console.log('step1');
	callback(null);
};

var dostep2 = function (callback) {
	console.log('step2');
	callback(null);
};

var dostep3 = function (callback) {
	console.log('step3');
	callback(null);
};

myCode();
