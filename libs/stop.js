var script = 'Application("iTunes").stop();'

module.exports = {
	osascript: require('osascript').eval,
	main: function (callback) {
		if (typeof callback !== 'function') callback = function(){};
		this.osascript(script, callback);
	}
};
