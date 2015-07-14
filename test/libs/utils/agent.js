var assert = require('assert');
var path = require('path');
var osascript = require('osascript').eval;
var root = path.join(__dirname, '..', '..', '..');

var agent = require(path.join(root, 'libs', 'utils', 'agent.js'));

describe('agent.js', function () {
	describe('osascript', function () {
		it('should be function', function (done) {
			assert.strictEqual(typeof agent.osascript, 'function');
			done();
		})
	});

	describe('execute', function () {
		it('should be function', function (done) {
			assert.strictEqual(typeof agent.execute, 'function');
			done();
		});
		it('should return error when script returns error', function (done) {
			agent.osascript = function (script, callback) {
				callback('error');
			};

			agent.execute('name', function (error, result) {
				assert.ok(error);
				assert.ok(!result);
				done();
			});
		});
		it('should do none when callback was undefined', function (done) {
			agent.osascript = function (script, callback) {
				callback();
			};

			agent.execute();
			done();
		});
	});

	describe('executeMeny', function () {
		it('should be function', function (done) {
			assert.strictEqual(typeof agent.executeMeny, 'function');
			done();
		});
		it('should return error when script returns error', function (done) {
			agent.osascript = function (script, callback) {
				callback('error');
			};

			agent.executeMeny('currentTrack', ['name', 'artist'], function (error, result) {
				assert.ok(error);
				assert.deepEqual(result, {});
				done();
			});
		});
		it('should do none when callback was undefined', function (done) {
			agent.osascript = function (script, callback) {
				callback();
			};

			agent.executeMeny('currentTrack', ['name', 'artist']);
			done();
		});
		it('should return exact result', function (done) {
			agent.osascript = function (script, callback) {
				callback(null, 'result text');
			};

			agent.executeMeny('currentTrack', ['name', 'artist'], function (error, result) {
				assert.ok(!error);
				assert.deepEqual(result, {
					name: 'result text',
					artist: 'result text'
				});
				done();
			});
		});
	});

	describe('cast', function () {
		it('should be function', function (done) {
			assert.strictEqual(typeof agent.cast, 'function');
			done();
		});
		it('should cast empty string', function (done) {
			assert.strictEqual(agent.cast(''), '');
			assert.strictEqual(agent.cast(void(0)), '');
			done();
		});
		it('should cast number string', function (done) {
			assert.strictEqual(agent.cast('9724'), 9724);
			assert.strictEqual(agent.cast('0'), 0);
			assert.strictEqual(agent.cast('-0'), 0);
			assert.strictEqual(agent.cast('-24'), -24);
			assert.strictEqual(agent.cast('08'), 8);
			assert.strictEqual(agent.cast('-0854'), -854);
			done();
		});
		it('should cast null string', function (done) {
			assert.strictEqual(agent.cast('null'), null);
			done();
		});
		it('should cast boolean string', function (done) {
			assert.strictEqual(agent.cast('true'), true);
			assert.strictEqual(agent.cast('false'), false);
			done();
		});
		it('should cast date string', function (done) {
			var d = new Date();
			var ds = String(d);
			assert.strictEqual(String(agent.cast(ds)), ds);
			done();
		});
		it('should not cast other string', function (done) {
			assert.strictEqual(agent.cast('object'), 'object');
			assert.strictEqual(agent.cast('sakura'), 'sakura');
			assert.strictEqual(agent.cast('void 0'), 'void 0');
			done();
		});
	});
});
