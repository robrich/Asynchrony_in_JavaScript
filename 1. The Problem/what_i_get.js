
// This is asynchronous code.
// Each function doesn't return the results imediately
// but rather calls a callback when it is done.
// This code is harder to read.
// It looks like an airplane wing

var myCode = function () {
	console.log('starting');
	dostep1('1 in', function (err, result) {
		dostep2('2 in', function (err, result) {
			dostep3('3 in', function (err, result) {
				console.log('all done');
				// We're all done with the process
				// but how do we get out of the airplane?
			});
		});
	});
};

//          \
//           \
//  \         \
//   ====================    "Ready for takeoff, Captain."
//  /         /
//           /
//          /


var dostep1 = function (arg1, callback) {
	console.log('step1');
	var results = 1;
	callback(null, results);
};

var dostep2 = function (arg2, callback) {
	console.log('step2');
	var results = 2;
	callback(null, results);
};

var dostep3 = function (arg3, callback) {
	console.log('step3');
	var results = 3;
	callback(null, results);
};

myCode();
