
var myCode = function () {
	var passed = 'passed', parameters = 'parameters', to = 'to';

	// Cool Node factoid:
	// The Node callback pattern is incredibly simple and very common.
	// The last parameter we pass to a function is the callback.
	// When the function is done, it passes an error (if any) in the first argument to our callback.
	// So we generally see this in our code:

	dosomething(passed, parameters, to, function(err, result, args) {

		// In this case we're passing in 3 parameters, the function returns an error and two result parameters
		// if the error is blank, it worked
		// if the error isn't blank, it failed

		if (err) {
			console.log('it failed');
			return;
		}

		console.log('it worked');

	});
};


var dosomething = function (passed, parameters, to, callback) {
	console.log('you passed in these: '+passed+' '+parameters+' '+to);

	// Uncomment this to "error" here:
	//console.log('I\'m erroring'); return callback('bad stuff happened' /*it errored*/);

	var result = 'result';
	var args = 'args';
	console.log('I return to you these: '+result+' '+args);
	callback(null /*no error: it worked*/, result, args);
};

myCode();
