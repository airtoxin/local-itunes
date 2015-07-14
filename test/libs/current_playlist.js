var assert = require('assert');
var path = require('path');
var osascript = require('osascript').eval;
var root = path.join(__dirname, '..', '..');

var cp = require(path.join(root, 'libs', 'current_playlist.js'));

describe('current_playlist.js', function () {
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
			cp.main(function (error, result) {
				assert.ok(error);
				assert.deepEqual(result, {});
				done();
			});
		});
		it('should do none when callback was not set', function (done) {
			cp.osascript = function (script, callback) {
				callback(null, 'result text');
			};
			cp.main();
			done();
		});
		it('should return exact result', function (done) {
			cp.osascript = function (script, callback) {
				callback(null, 'result text');
			};
			cp.main(function (error, result) {
				assert.ok(!error);
				assert.strictEqual(typeof result, 'object');
				var keys = Object.keys(result);
				assert.ok(keys.length);
				keys.forEach(function (key) {
					assert.strictEqual(result[key], 'result text');
				});
				done();
			});
		});
	});

	describe('cast', function () {
		it('should cast number string', function (done) {
			assert.strictEqual(cp.cast('9724'), 9724);
			assert.strictEqual(cp.cast('0'), 0);
			assert.strictEqual(cp.cast('-0'), 0);
			assert.strictEqual(cp.cast('-24'), -24);
			assert.strictEqual(cp.cast('08'), 8);
			assert.strictEqual(cp.cast('-0854'), -854);
			done();
		});
		it('should cast null string', function (done) {
			assert.strictEqual(cp.cast('null'), null);
			done();
		});
		it('should cast boolean string', function (done) {
			assert.strictEqual(cp.cast('true'), true);
			assert.strictEqual(cp.cast('false'), false);
			done();
		});
		it('should cast date string', function (done) {
			var d = new Date();
			var ds = String(d);
			assert.strictEqual(String(cp.cast(ds)), ds);
			done();
		});
		it('should not cast other string', function (done) {
			assert.strictEqual(cp.cast('object'), 'object');
			assert.strictEqual(cp.cast('sakura'), 'sakura');
			assert.strictEqual(cp.cast('void 0'), 'void 0');
			done();
		});
	});
});
