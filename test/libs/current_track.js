var assert = require('assert');
var path = require('path');
var root = path.join(__dirname, '..', '..');
var agent = require(path.join(root, 'libs', 'utils', 'agent.js'));

var ct = require(path.join(root, 'libs', 'current_track.js'));

describe('current_track.js', function () {
	describe('agent', function () {
		it('should be object', function (done) {
			assert.strictEqual(typeof ct.agent, 'object');
			done();
		});
	});

	describe('main', function () {
		afterEach(function (done) {
			ct.agent = agent;
			done();
		});
		it('should be function', function (done) {
			assert.strictEqual(typeof ct.main, 'function');
			done();
		});
		it('should return error when agent.executeMeny returns error', function (done) {
			ct.agent = {
				executeMeny: function (objectPath, methodNames, callback) {
					callback('error');
				}
			};

			ct.main(function (error) {
				assert.ok(error);
				done();
			});
		});
		it('should call agent.executeMeny', function (done) {
			ct.agent = {
				executeMeny: function (objectPath, methodNames, callback) {
					assert.strictEqual(objectPath, ct.objectPath);
					assert.deepEqual(methodNames, ct.methodNames);
					callback();
				}
			};

			ct.main(done);
		});
	});
});
