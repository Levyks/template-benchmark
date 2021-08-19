# Node.JS template engines benchmark

## Engines

- [esbeltoJS](https://github.com/Levyks/esbeltoJS) v2.0.1
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
	 Escaped   : 1334ms
	 Unescaped : 39ms
	 Total     : 1373ms

	EJS
	 Escaped   : 3090ms
	 Unescaped : 1443ms
	 Total     : 4533ms

	EJS without `with`
	 Escaped   : 1288ms
	 Unescaped : 50ms
	 Total     : 1338ms

	Pug
	 Escaped   : 4063ms
	 Unescaped : 47ms
	 Total     : 4110ms

	Pug without `with`
	 Escaped   : 3594ms
	 Unescaped : 27ms
	 Total     : 3621ms

	Handlebars.js
	 Escaped   : 1742ms
	 Unescaped : 657ms
	 Total     : 2399ms

	ECT
	 Escaped   : 1256ms
	 Unescaped : 53ms
	 Total     : 1309ms

	Dust
	 Escaped   : 1826ms
	 Unescaped : 398ms
	 Total     : 2224ms

	Hogan.js
	 Escaped   : 1515ms
	 Unescaped : 189ms
	 Total     : 1704ms

	Fest
	 Escaped   : 1022ms
	 Unescaped : 51ms
	 Total     : 1073ms

	doT
	 Escaped   : 1634ms
	 Unescaped : 33ms
	 Total     : 1667ms

	Underscore
	 Escaped   : 1309ms
	 Unescaped : 864ms
	 Total     : 2173ms

	Eco
	 Escaped   : 2521ms
	 Unescaped : 333ms
	 Total     : 2854ms

	CoffeeKup
	 Escaped   : 906ms
	 Unescaped : 2792ms
	 Total     : 3698ms

## Usage

	git clone git://github.com/levyks/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
