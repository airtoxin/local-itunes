var assert = require('assert');
var path = require('path');
var root = path.join(__dirname, '..');

var index = require(path.join(root, 'index.js'));

describe('index.js', function () {
	it('should be interface of libs', function (done) {
		assert.strictEqual(typeof index.playerState, 'function');
		assert.strictEqual(typeof index.play, 'function');
		assert.strictEqual(typeof index.pause, 'function');
		assert.strictEqual(typeof index.playpause, 'function');
		assert.strictEqual(typeof index.stop, 'function');
		assert.strictEqual(typeof index.currentTrack, 'function');
		assert.strictEqual(typeof index.currentPlaylist, 'function');
		done();
	});
});
