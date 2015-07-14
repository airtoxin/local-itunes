var osascript = require('osascript').eval;

var script = 'Application("iTunes").stop();'

module.exports = function (callback) {
	if (typeof callback !== 'function') callback = function(){};
	osascript(script, callback);
};
