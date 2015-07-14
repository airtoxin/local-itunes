var osascript = require('osascript').eval;

var script = 'Application("iTunes").playpause();'

module.exports = function (callback) {
	if (typeof callback !== 'function') callback = function(){};
	osascript(script, callback);
};
