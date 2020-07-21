var async = require('neo-async');
var osascript = require('osascript').eval;

var Agent = (function () {
	return function () {
		var self = this;
		self.BASE = 'Application("Music")';
		self.osascript = osascript;

		self.execute = function (methodPath, callback) {
			var script = 'Application("Music").' + methodPath + '();';
			callback = callback || function(){};
			self.osascript(script, function (error, result) {
				if (error) return callback(error);
				if (typeof result !== 'string') return callback(error, '');
				callback(error, result.trim());
			});
		};

		self.executeMeny = function (objectPath, methodNames, callback) {
			callback = callback || function(){};

			var result = {};
			async.each(methodNames, function (methodName, next) {
				var script = self.BASE + '.' + objectPath + '.' + methodName + '();';
				self.osascript(script, function (error, data) {
					if (typeof data === 'string') data = data.trim();
					result[methodName] = self.cast(data);
					next(error);
				});
			}, function (error) {
				if (error) return callback(error, {});
				callback(error, result);
			});
		};

		self.cast = function (maybeStr) {
			if (!maybeStr) return '';
			if (maybeStr.match(/^-?\d+(\.\d+)?$/)) return Number(maybeStr);
			if (maybeStr.match(/^null$/)) return null;
			if (maybeStr.match(/^(true|false)$/)) return maybeStr === 'true';
			if (maybeStr.match(/^\w{3}\s\w{3}\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\s.*$/)) return new Date(maybeStr);
			return maybeStr;
		};
	};
}());

module.exports = new Agent();
