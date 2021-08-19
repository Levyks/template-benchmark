# Node.JS template engines benchmark

## Engines

- [esbeltoJS](https://github.com/Levyks/esbeltoJS) v2.0.0
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

	esbeltoJS
	 Escaped   : 1374ms
	 Unescaped : 43ms
	 Total     : 1417ms

	EJS
	 Escaped   : 3251ms
	 Unescaped : 1630ms
	 Total     : 4881ms

	EJS without `with`
	 Escaped   : 1276ms
	 Unescaped : 44ms
	 Total     : 1320ms

	Pug
	 Escaped   : 3949ms
	 Unescaped : 41ms
	 Total     : 3990ms

	Pug without `with`
	 Escaped   : 3487ms
	 Unescaped : 28ms
	 Total     : 3515ms

	Handlebars.js
	 Escaped   : 1738ms
	 Unescaped : 631ms
	 Total     : 2369ms

	ECT
	 Escaped   : 1246ms
	 Unescaped : 52ms
	 Total     : 1298ms

	Dust
	 Escaped   : 1737ms
	 Unescaped : 401ms
	 Total     : 2138ms

	Hogan.js
	 Escaped   : 1511ms
	 Unescaped : 193ms
	 Total     : 1704ms

	Fest
	 Escaped   : 995ms
	 Unescaped : 45ms
	 Total     : 1040ms

	doT
	 Escaped   : 1601ms
	 Unescaped : 34ms
	 Total     : 1635ms

	Underscore
	 Escaped   : 1281ms
	 Unescaped : 873ms
	 Total     : 2154ms

	Eco
	 Escaped   : 2531ms
	 Unescaped : 332ms
	 Total     : 2863ms

	CoffeeKup
	 Escaped   : 844ms
	 Unescaped : 2513ms
	 Total     : 3357ms

## Usage

	git clone git://github.com/levyks/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
