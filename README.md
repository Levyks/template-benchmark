# Node.JS template engines benchmark

## Engines

- [esbeltoJS](https://github.com/Levyks/esbeltoJS) v1.0.3
- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.1.3 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v2.7.5 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.5.9 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v3.1.6
- [Fest](https://github.com/mailru/fest) v0.12.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v4.7.7 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v3.0.2 ([website](http://twitter.github.com/hogan.js/))
- [Pug](https://github.com/pugjs/pug/tree/master/packages/pug) v3.0.2 ([website](https://pugjs.org/))
- [Underscore](https://github.com/documentcloud/underscore) v1.13.1 ([website](http://underscorejs.org/))

## Test environment

- CPU: Intel Core i3-10100F 3.6Ghz
- OS: Windows 10 Home 21H1
- Node.JS version: 14.16.0

## Results

	Rendering 100000 templates:

	ECT
		Escaped   : 1263ms
		Unescaped : 51ms
		Total     : 1314ms

	Dust
		Escaped   : 1748ms
		Unescaped : 404ms
		Total     : 2152ms

	Hogan.js
		Escaped   : 1502ms
		Unescaped : 185ms
		Total     : 1687ms

	Fest
		Escaped   : 960ms
		Unescaped : 47ms
		Total     : 1007ms

	EJS without `with`
		Escaped   : 1252ms
		Unescaped : 42ms
		Total     : 1294ms

	doT
		Escaped   : 1563ms
		Unescaped : 32ms
		Total     : 1595ms

	Underscore
		Escaped   : 1289ms
		Unescaped : 882ms
		Total     : 2171ms

	EJS
		Escaped   : 3467ms
		Unescaped : 1744ms
		Total     : 5211ms

	Eco
		Escaped   : 2594ms
		Unescaped : 295ms
		Total     : 2889ms

	Handlebars.js
		Escaped   : 1858ms
		Unescaped : 666ms
		Total     : 2524ms

	Pug without `with`
		Escaped   : 3684ms
		Unescaped : 29ms
		Total     : 3713ms

	CoffeeKup
		Escaped   : 861ms
		Unescaped : 2502ms
		Total     : 3363ms

	Pug
		Escaped   : 3992ms
		Unescaped : 46ms
		Total     : 4038ms

	esbeltoJS
		Escaped   : 3530ms
		Unescaped : 1621ms
		Total     : 5151ms

## Usage

	git clone git://github.com/levyks/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
