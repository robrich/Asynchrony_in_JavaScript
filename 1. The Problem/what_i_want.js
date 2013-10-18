
// This is synchronous code.
// Each line runs right after the other.
// It's easy to see what's going on here.

var myCode = function () {
	console.log('starting');
	var step1result = dostep1();
	var step2result = dostep2();
	var step3result = dostep3();
	console.log('all done');
};



var dostep1 = function () {
	console.log('step1');
	var results = 1;
	return results;
};

var dostep2 = function () {
	console.log('step2');
	var results = 2;
	return results;
};

var dostep3 = function () {
	console.log('step3');
	var results = 3;
	return results;
};

myCode();
