var esbelto = require('esbelto');
var renderer;

module.exports.prepare = function (data, done) {
  renderer = new esbelto.Renderer(__dirname + '/tpl_escaped.svelte', data);
	done();
};

module.exports.prepareUnescaped = function (data, done) {
  renderer = new esbelto.Renderer(__dirname + '/tpl_unescaped.svelte', data);
	done();
};

module.exports.step = function (done) {
	var html = '<!DOCTYPE html>\n<html>\n' + renderer.render() + '\n</html>';
	done(undefined, html);
};