var assert = require('assert');
var path = require('path');
var root = path.join(__dirname, '..', '..');
var agent = require(path.join(root, 'libs', 'utils', 'agent.js'));

var s = require(path.join(root, 'libs', 'stop.js'));

describe('stop.js', function () {
	describe('agent', function () {
		it('should be object', function (done) {
			assert.strictEqual(typeof s.agent, 'object');
			done();
		});
	});

	describe('main', function () {
		afterEach(function (done) {
			s.agent = agent;
			done();
		});
		it('should be function', function (done) {
			assert.strictEqual(typeof s.main, 'function');
			done();
		});
		it('should return error when agent.execute returns error', function (done) {
			s.agent = {
				execute: function (methodPath, callback) {
					callback('error');
				}
			};

			s.main(function (error) {
				assert.ok(error);
				done();
			});
		});
		it('should call agent.execute', function (done) {
			s.agent = {
				execute: function (methodPath, callback) {
					assert.strictEqual(methodPath, s.methodPath);
					callback();
				}
			};

			s.main(function (error) {
				assert.ok(!error);
				done();
			});
		});
	});
});
