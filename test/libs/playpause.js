var assert = require('assert');
var path = require('path');
var osascript = require('osascript').eval;
var root = path.join(__dirname, '..', '..');

var cp = require(path.join(root, 'libs', 'playpause.js'));

describe('playpause.js', function () {
	describe('main', function () {
		afterEach(function (done) {
			cp.osascript = osascript;
			done();
		});
		it('should be function', function (done) {
			assert.strictEqual(typeof cp.main, 'function');
			done();
		});
		it('should return error when script returns error', function (done) {
			cp.osascript = function (script, callback) {
				callback('error');
			};
			cp.main(function (error) {
				assert.ok(error);
				done();
			});
		});
		it('should do none when callback was not set', function (done) {
			cp.osascript = function (script, callback) {
				callback();
			};
			cp.main();
			done();
		});
		it('should return none', function (done) {
			cp.osascript = function (script, callback) {
				callback();
			};
			cp.main(function (error) {
				assert.ok(!error);
				done();
			});
		});
	});
});
