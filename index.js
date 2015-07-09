var itunes = require('./libs/itunes');

module.exports = {
	playerState: itunes.playerState,
	play: itunes.play,
	pause: itunes.pause,
	playpause: itunes.playpause,
	stop: itunes.stop,
	currentTrack: itunes.currentTrack,
	currentPlaylist: itunes.currentPlaylist
};
