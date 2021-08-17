# Node.JS template engines benchmark

## Engines

- [esbeltoJS](https://github.com/Levyks/esbeltoJS) v1.0.3
- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i3-10100F 3.6Ghz
- OS: Windows 10 Home 21H1
- Node.JS version: 14.16.0

## Results

	Rendering 100000 templates:

	ECT
		Escaped   : 1343ms
		Unescaped : 54ms
		Total     : 1397ms

	Dust
		Escaped   : 1603ms
		Unescaped : 174ms
		Total     : 1777ms

	Hogan.js
		Escaped   : 1534ms
		Unescaped : 198ms
		Total     : 1732ms

	Gaikan
		Escaped   : 1095ms
		Unescaped : 41ms
		Total     : 1136ms

	Fest
		Escaped   : 1041ms
		Unescaped : 44ms
		Total     : 1085ms

	EJS without `with`
		Escaped   : 2089ms
		Unescaped : 209ms
		Total     : 2298ms

	doT
		Escaped   : 1582ms
		Unescaped : 33ms
		Total     : 1615ms

	Swig
		Escaped   : 2138ms
		Unescaped : 73ms
		Total     : 2211ms

	Underscore
		Escaped   : 1304ms
		Unescaped : 823ms
		Total     : 2127ms

	EJS
		Escaped   : 3941ms
		Unescaped : 1464ms
		Total     : 5405ms

	Eco
		Escaped   : 2454ms
		Unescaped : 301ms
		Total     : 2755ms

	Handlebars.js
		Escaped   : 1430ms
		Unescaped : 318ms
		Total     : 1748ms

	Jade without `with`
		Escaped   : 2218ms
		Unescaped : 359ms
		Total     : 2577ms

	CoffeeKup
		Escaped   : 819ms
		Unescaped : 2364ms
		Total     : 3183ms

	Jade
		Escaped   : 4776ms
		Unescaped : 2867ms
		Total     : 7643ms

	esbeltoJS
		Escaped   : 3356ms
		Unescaped : 1515ms
		Total     : 4871ms

## Usage

	git clone git://github.com/levyks/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
