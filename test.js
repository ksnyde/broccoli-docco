'use strict';
var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var debug = require('debug')('broccoli:docco:test');

// cleanup after testing
after(function () {
	// remove the Broccoli temporary directory (in case it hasn't done this itself)
	rimraf.sync('tmp'); // the broccoli temporary directory
	// remove the directory that `broccoli build` targets
	rimraf.sync('temp');
});

// JavaScript
it('should create documentation for Javascript source', function () {
	var expected = './temp/docs/testJS.html';
	var actual = fs.readdirSync('temp');
	assert(fs.existsSync(expected), "JS documentation should exist! Documentation files that did exist included: " + JSON.stringify(actual));
	var jsDocumentation = fs.readFileSync(expected);
	assert.notEqual(jsDocumentation,null,"JS documentation should not be empty");
});

// Coffeescript
it('should create documentation for Coffeescript source', function () {
	var expected = './temp/docs/testCoffee.html';
	var actual = fs.readdirSync('temp');
	assert(fs.existsSync(expected), "Coffee documentation should exist! Documentation files that did exist included: " + JSON.stringify(actual));
	var coffeeDocumentation = fs.readFileSync(expected);
	assert.notEqual(coffeeDocumentation,null,"Coffee documentation should not be empty");
});

// PHP
it('should create documentation for PHP source', function () {
	var expected = './temp/docs/testPHP.html';
	var actual = fs.readdirSync('temp');
	assert(fs.existsSync(expected), "PHP documentation should exist! Documentation files that did exist included: " + JSON.stringify(actual));
	var phpDocumentation = fs.readFileSync(expected);
	assert.notEqual(phpDocumentation,null,"PHP documentation should not be empty");
});

// Subfolder
it('should create documentation for source that\'s in a subfolder', function () {
	var expected = './temp/docs/testSubFolder.html';
	var actual = fs.readdirSync('temp');
	assert(fs.existsSync(expected), "JS documentation for a subfolder should exist! Documentation files that did exist included: " + JSON.stringify(actual));
	var jsDocumentation = fs.readFileSync(expected);
	assert.notEqual(jsDocumentation,null,"JS documentation should not be empty");
});

// Brocfile
it('should create documentation for Brocfile', function () {
	var expected = './temp/docs/Brocfile.html';
	var actual = fs.readdirSync('temp');
	assert(fs.existsSync(expected), "Brocfile documentation should exist! Documentation files that did exist included: " + JSON.stringify(actual));
	var jsDocumentation = fs.readFileSync(expected);
	assert.notEqual(jsDocumentation,null,"JS documentation should not be empty");
});

// No source remenants
it('none of the source files should exist in the output tree', function () {
	var expected = './temp/docs/Brocfile.js';
	var actual = fs.readdirSync('temp');
	assert.notEqual(fs.existsSync(expected), "Source files should NOT exist in output tree: " + JSON.stringify(actual));
	expected = './temp/docs/testJS.js';
	assert.notEqual(fs.existsSync(expected), "Source files should NOT exist in output tree: " + JSON.stringify(actual));
});