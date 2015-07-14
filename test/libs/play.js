var assert = require('assert');
var path = require('path');
var root = path.join(__dirname, '..', '..');
var agent = require(path.join(root, 'libs', 'utils', 'agent.js'));

var p = require(path.join(root, 'libs', 'play.js'));

describe('play.js', function () {
	describe('agent', function () {
		it('should be object', function (done) {
			assert.strictEqual(typeof p.agent, 'object');
			done();
		});
	});

	describe('main', function () {
		afterEach(function (done) {
			p.agent = agent;
			done();
		});
		it('should be function', function (done) {
			assert.strictEqual(typeof p.main, 'function');
			done();
		});
		it('should return error when agent.execute returns error', function (done) {
			p.agent = {
				execute: function (methodPath, callback) {
					callback('error');
				}
			};

			p.main(function (error) {
				assert.ok(error);
				done();
			});
		});
		it('should call agent.execute', function (done) {
			p.agent = {
				execute: function (methodPath, callback) {
					assert.strictEqual(methodPath, p.methodPath);
					callback();
				}
			};

			p.main(function (error) {
				assert.ok(!error);
				done();
			});
		});
	});
});
