var osascript = require('osascript').eval;
var async = require('neo-async');

var properties = [
	'duration',
	'name',
	'loved',
	'shuffle',
	'size',
	'songRepeat',
	'specialKind',
	'time',
	'visible'
];
var OSA_BASE = 'Application("iTunes").currentPlaylist';

var cast = function (data) {
	if (data.match(/^\d+(\.\d+)?$/)) return Number(data);
	if (data.match(/^null$/)) return null;
	if (data.match(/^(true|false)$/)) return data === 'true';
	if (data.match(/^\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\s.*$/)) return new Date(data);
	return data;
};

module.exports = {
	main: function (callback) {
		if (typeof callback !== 'function') callback = function(){};

		var result = {};
		async.each(properties, function (property, next) {
			var script = OSA_BASE + '.' + property + '();';
			osascript(script, function (error, data) {
				if (error) return next(error);
				result[property] = cast(data.trim());
				next();
			});
		}, function (error) {
			callback(error, result);
		});
	}
};

