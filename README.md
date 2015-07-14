# local-itunes

control itunes

## Documents

### play(callback)

Play iTunes track.

__callback(error);__

### pause(callback)

Pause track.

__callback(error);__

### stop(callback)

Stop iTunes.

__callback(error);__

### playpause(callback);

Toggle play/pause.

__callback(error);__

### playerState(callback)

Get current iTunes state.

__callback(error, state);__

`state`: iTunes state string (stopped,playing,paused)

### currentTrack(callback);

Get current playing track informations.

__callback(error, data);__

`data`: track data object.

```
{ 
  album: 'airtoxin',
  albumArtist: '',
  bpm: 0,
  category: '',
  albumLoved: false,
  albumRating: 0,
  albumRatingKind: 'computed',
  artist: 'airtoxin',
  bitRate: 320,
  compilation: false,
  comment: '',
  bookmark: 0,
  bookmarkable: false,
  discNumber: 0,
  dateAdded: Tue Jul 14 2015 19:11:36 GMT+0900 (JST),
  databaseID: 3221,
  composer: '',
  episodeID: '',
  description: '',
  gapless: null,
  loved: false,
  rating: 0,
  grouping: '',
  podcast: false,
  ratingKind: 'computed',
  enabled: true,
  discCount: 0,
  itunesu: false,
  finish: 2010.5140380859375,
  show: '',
  episodeNumber: 0,
  genre: '',
  eq: '',
  kind: 'MPEG Audio File',
  seasonNumber: 0,
  modificationDate: Tue Jul 14 2015 19:11:30 GMT+0900 (JST),
  skippedDate: null,
  longDescription: null,
  lyrics: '',
  duration: 2010.5140380859375,
  sampleRate: 44100,
  sortShow: '',
  sortComposer: '',
  sortAlbum: '',
  time: '33:30',
  sortArtist: '',
  year: 2014,
  playedCount: 7,
  releaseDate: null,
  trackCount: 0,
  trackNumber: 0,
  sortName: '',
  skippedCount: 0,
  playedDate: Tue Jan 20 2015 09:24:10 GMT+0900 (JST),
  videoKind: 'none',
  shufflable: true,
  sortAlbumArtist: '',
  unplayed: false,
  volumeAdjustment: 0,
  start: 0,
  size: 80677570
}
```

### currentPlaylist(callback);

Get current playing playlist informations.

`data`: track data object.

```
{ 
  duration: 111226,
  songRepeat: 'off',
  size: 4440656665,
  name: 'Music',
  time: '1:06:53:46',
  shuffle: false,
  visible: true,
  loved: false,
  specialKind: 'Music' 
}
```
