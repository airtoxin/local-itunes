var path = require('path');
var requireDir = require('require-dir');
var itunes = requireDir(path.join(__dirname, 'libs'));

module.exports = {
	playerState: itunes.player_state.main.bind(itunes.player_state),
	play: itunes.play.main.bind(itunes.play),
	pause: itunes.pause.main.bind(itunes.pause),
	playpause: itunes.playpause.main.bind(itunes.playpause),
	stop: itunes.stop.main.bind(itunes.stop),
	currentTrack: itunes.current_track.main.bind(itunes.current_track),
	currentPlaylist: itunes.current_playlist.main.bind(itunes.current_playlist)
};
