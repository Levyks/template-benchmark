var data = require('./data');

var count = 100000;
var esbelto = require('./esbelto/esbelto.js');
var ect = require('./ect/ect.js');
var ejs = require('./ejs/ejs.js');
var ejsWithoutWith = require('./ejs-without-with/ejs.js');
var pug = require('./pug/pug.js');
var pugWithoutWith = require('./pug-without-with/pug.js');
var eco = require('./eco/eco.js');
var hogan = require('./hogan/hogan.js');
var dust = require('./dust/dust.js');
var fest = require('./fest/fest.js');
var dot = require('./dot/dot.js');
var handlebars = require('./handlebars/handlebars.js');
var coffeekup = require('./coffeekup/coffeekup.js');
var underscore = require('./underscore/underscore.js');

var test = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepare(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var testUnescaped = function(name, sample, cb) {
	var i = 0;
	var start;
	var done = function(error, html) {
		i++;
		if (i === count) {
			var now = Date.now();
			cb(null, name, now - start);
		}
	}
	sample.prepareUnescaped(data, function() {
		start = Date.now();
		for (var j = 0; j < count; j++) {
			sample.step(done);
		}
	});
};

var samples = [

	{ name : 'CoffeeKup', sample : coffeekup },
	{ name : 'Eco', sample : eco },
	{ name : 'Underscore', sample : underscore },
	{ name : 'doT', sample : dot },
	{ name : 'Fest', sample : fest },
	{ name : 'Hogan.js', sample : hogan },
	{ name : 'Dust', sample : dust },
	{ name : 'ECT', sample : ect },
	{ name : 'Handlebars.js', sample : handlebars },
	{ name : 'Pug without `with`', sample : pugWithoutWith },
	{ name : 'Pug', sample : pug },
	{ name : 'EJS without `with`', sample : ejsWithoutWith },
	{ name : 'EJS', sample : ejs },
	{ name : 'esbeltoJS', sample : esbelto }
];

var runTests = function () {
	if (samples.length) {
		var sample = samples.pop();
		test(sample.name, sample.sample, function (err, name, result) {
			testUnescaped(sample.name, sample.sample, function (err, name, resultUnescaped) {
				console.log(name);
				console.log('  Escaped   : ' + result + 'ms');
				console.log('  Unescaped : ' + resultUnescaped + 'ms');
				console.log('  Total     : ' + (result + resultUnescaped) + 'ms');
				console.log('');
				runTests();
			});
		});
	}
};

console.log('Rendering ' + count + ' templates:\n');
runTests();
