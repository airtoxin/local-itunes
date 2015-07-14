var path = require('path');
var requireDir = require('require-dir');
var itunes = requireDir(path.join(__dirname, 'libs'));

module.exports = {
	playerState: itunes.player_state.main,
	play: itunes.play.main,
	pause: itunes.pause.main,
	playpause: itunes.playpause.main,
	stop: itunes.stop.main,
	currentTrack: itunes.current_track.main,
	currentPlaylist: itunes.current_playlist.main
};
