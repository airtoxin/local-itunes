var path = require('path');
var async = require('neo-async');
var agent = require(path.join(__dirname, 'utils', 'agent'));

module.exports = {
	agent: agent,
	methodPath: 'playpause',
	main: function (callback) {
		this.agent.execute(this.methodPath, callback);
	}
};
