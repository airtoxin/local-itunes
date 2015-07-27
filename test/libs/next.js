var assert = require('assert');
var path = require('path');
var root = path.join(__dirname, '..', '..');
var agent = require(path.join(root, 'libs', 'utils', 'agent.js'));

var n = require(path.join(root, 'libs', 'next.js'));

describe('next.js', function () {
	describe('agent', function () {
		it('should be object', function (done) {
			assert.strictEqual(typeof n.agent, 'object');
			done();
		});
	});

	describe('main', function () {
		afterEach(function (done) {
			n.agent = agent;
			done();
		});
		it('should be function', function (done) {
			assert.strictEqual(typeof n.main, 'function');
			done();
		});
		it('should return error when agent.execute returns error', function (done) {
			n.agent = {
				execute: function (methodPath, callback) {
					callback('error');
				}
			};

			n.main(function (error) {
				assert.ok(error);
				done();
			});
		});
		it('should call agent.execute', function (done) {
			n.agent = {
				execute: function (methodPath, callback) {
					assert.strictEqual(methodPath, n.methodPath);
					callback();
				}
			};

			n.main(function (error) {
				assert.ok(!error);
				done();
			});
		});
	});
});
