var assert = require('assert');
var path = require('path');
var root = path.join(__dirname, '..', '..');
var agent = require(path.join(root, 'libs', 'utils', 'agent.js'));

var cp = require(path.join(root, 'libs', 'current_playlist.js'));

describe('current_playlist.js', function () {
	describe('agent', function () {
		it('should be object', function (done) {
			assert.strictEqual(typeof cp.agent, 'object');
			done();
		});
	});

	describe('main', function () {
		afterEach(function (done) {
			cp.agent = agent;
			done();
		});
		it('should be function', function (done) {
			assert.strictEqual(typeof cp.main, 'function');
			done();
		});
		it('should return error when agent.executeMeny returns error', function (done) {
			cp.agent = {
				executeMeny: function (objectPath, methodNames, callback) {
					callback('error');
				}
			};

			cp.main(function (error) {
				assert.ok(error);
				done();
			});
		});
		it('should call agent.executeMeny', function (done) {
			cp.agent = {
				executeMeny: function (objectPath, methodNames, callback) {
					assert.strictEqual(objectPath, cp.objectPath);
					assert.deepEqual(methodNames, cp.methodNames);
					callback();
				}
			};

			cp.main(done);
		});
	});
});
