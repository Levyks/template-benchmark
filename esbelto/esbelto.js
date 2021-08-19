var esbelto = require('esbelto');
var compiled;
var tplData;

module.exports.prepare = function (data, done) {
  renderer = new esbelto.Renderer(__dirname + '/tpl_escaped.svelte');
	tplData = data;
	compiled = renderer.compiler.getCompiledFunc();
	done();
};

module.exports.prepareUnescaped = function (data, done) {
  renderer = new esbelto.Renderer(__dirname + '/tpl_unescaped.svelte');
	tplData = data;
	compiled = renderer.compiler.getCompiledFunc();
	done();
};

module.exports.step = function (done) {
	var html = '<!DOCTYPE html>\n<html>\n' + compiled(tplData) + '\n</html>';
	done(undefined, html);
};