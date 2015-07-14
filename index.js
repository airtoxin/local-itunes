var path = require('path');
var requireDir = require('require-dir');
var itunes = requireDir(path.join(__dirname, 'libs'));

module.exports = {
	playerState: itunes.player_state,
	play: itunes.play,
	pause: itunes.pause,
	playpause: itunes.playpause,
	stop: itunes.stop,
	currentTrack: itunes.current_track,
	currentPlaylist: itunes.current_playlist
};
