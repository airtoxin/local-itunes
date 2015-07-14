var osascript = require('osascript').eval;
var async = require('neo-async');

var properties = [
	'album',
	'albumArtist',
	'albumLoved',
	'albumRating',
	'albumRatingKind',
	'artist',
	'bitRate',
	'bookmark',
	'bookmarkable',
	'bpm',
	'category',
	'comment',
	'compilation',
	'composer',
	'databaseID',
	'dateAdded',
	'description',
	'discCount',
	'discNumber',
	'duration',
	'enabled',
	'episodeID',
	'episodeNumber',
	'eq',
	'finish',
	'gapless',
	'genre',
	'grouping',
	'itunesu',
	'kind',
	'longDescription',
	'loved',
	'lyrics',
	'modificationDate',
	'playedCount',
	'playedDate',
	'podcast',
	'rating',
	'ratingKind',
	'releaseDate',
	'sampleRate',
	'seasonNumber',
	'shufflable',
	'skippedCount',
	'skippedDate',
	'show',
	'sortAlbum',
	'sortArtist',
	'sortAlbumArtist',
	'sortName',
	'sortComposer',
	'sortShow',
	'size',
	'start',
	'time',
	'trackCount',
	'trackNumber',
	'unplayed',
	'videoKind',
	'volumeAdjustment',
	'year'
];
var OSA_BASE = 'Application("iTunes").currentTrack';

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
