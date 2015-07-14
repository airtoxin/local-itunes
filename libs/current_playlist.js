var path = require('path');
var async = require('neo-async');
var agent = require(path.join(__dirname, 'utils', 'agent'));

module.exports = {
	agent: agent,
	objectPath: 'currentPlaylist',
	methodNames: [
		'class',
		'container',
		'id',
		'index',
		'name',
		'persistentID',
		'properties',
		'duration',
		'name',
		'loved',
		'shuffle',
		'size',
		'songRepeat',
		'specialKind',
		'time',
		'visible'
	],
	main: function (callback) {
		this.agent.executeMeny(this.objectPath, this.methodNames, callback);
	}
};

