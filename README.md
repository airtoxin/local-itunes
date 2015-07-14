# local-itunes [![Build Status](https://travis-ci.org/airtoxin/local-itunes.svg?branch=master)](https://travis-ci.org/airtoxin/local-itunes)

control itunes

## Install

`npm i local-itunes`

## Usage

```javascript
var iTunes = require('local-itunes');
iTunes.playerState(function(error, state){
  if (state === 'paused') iTunes.play();
});
```

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

```javascript
{ 
  id: 3226,
  container: 'Application("iTunes").sources.byId(64).userPlaylists.byId(1425)',
  class: 'fileTrack',
  index: 2,
  albumArtist: '',
  persistentID: '5BFF1A83F337DFA9',
  albumLoved: false,
  albumRatingKind: 'computed',
  artist: 'airtoxin',
  album: 'airtoxin',
  albumRating: 0,
  name: 'recently liveset 20140530',
  properties: 'class:fileTrack, id:3226, index:2, name:recently liveset 20140530, persistentID:5BFF1A83F337DFA9, databaseID:3221, dateAdded:Tue Jul 14 2015 19:11:36 GMT+0900 (JST), time:33:30, duration:2010.5140380859375, artist:airtoxin, albumArtist:, composer:, album:airtoxin, genre:, bitRate:320, sampleRate:44100, trackCount:0, trackNumber:0, discCount:0, discNumber:0, size:80677570, volumeAdjustment:0, year:2014, comment:, eq:, kind:MPEG オーディオファイル, videoKind:none, modificationDate:Tue Jul 14 2015 19:11:30 GMT+0900 (JST), enabled:true, start:0, finish:2010.5140380859375, playedCount:7, playedDate:Tue Jan 20 2015 09:24:10 GMT+0900 (JST), skippedCount:0, skippedDate:null, compilation:false, gapless:null, rating:0, bpm:0, grouping:, podcast:false, itunesu:false, bookmarkable:false, bookmark:0, shufflable:true, lyrics:, category:, description:, longDescription:null, show:, seasonNumber:0, episodeID:, episodeNumber:0, unplayed:false, sortName:, sortAlbum:, sortArtist:, sortComposer:, sortAlbumArtist:, sortShow:, releaseDate:null, loved:false, albumLoved:false',
  bitRate: 320,
  comment: '',
  bookmark: 0,
  bpm: 0,
  grouping: '',
  playedDate: Tue Jan 20 2015 09:24:10 GMT+0900 (JST),
  bookmarkable: false,
  finish: 2010.5140380859375,
  lyrics: '',
  kind: 'MPEG オーディオファイル',
  enabled: true,
  sortAlbumArtist: '',
  year: 2014,
  modificationDate: Tue Jul 14 2015 19:11:30 GMT+0900 (JST),
  dateAdded: Tue Jul 14 2015 19:11:36 GMT+0900 (JST),
  composer: '',
  longDescription: null,
  episodeNumber: 0,
  start: 0,
  rating: 0,
  trackNumber: 0,
  sortArtist: '',
  eq: '',
  loved: false,
  sortComposer: '',
  videoKind: 'none',
  category: '',
  genre: '',
  itunesu: false,
  show: '',
  podcast: false,
  releaseDate: null,
  skippedDate: null,
  discNumber: 0,
  playedCount: 7,
  skippedCount: 0,
  trackCount: 0,
  duration: 2010.5140380859375,
  sampleRate: 44100,
  compilation: false,
  episodeID: '',
  volumeAdjustment: 0,
  gapless: null,
  time: '33:30',
  discCount: 0,
  sortShow: '',
  databaseID: 3221,
  unplayed: false,
  sortName: '',
  shufflable: true,
  sortAlbum: '',
  size: 80677570,
  ratingKind: 'computed',
  seasonNumber: 0,
  description: '' 
}
```

### currentPlaylist(callback);

Get current playing playlist informations.

`data`: track data object.

```javascript
{ 
  container: 'Application("iTunes").sources.byId(64)',
  duration: 111226,
  id: 1425,
  index: 2,
  class: 'userPlaylist',
  persistentID: '04251A70F978A503',
  time: '1:06:53:46',
  specialKind: 'Music',
  loved: false,
  name: 'ミュージック',
  properties: 'class:userPlaylist, id:1425, index:2, name:ミュージック, persistentID:04251A70F978A503, duration:111226, size:4440656665, time:1:06:53:46, visible:true, shuffle:false, songRepeat:off, specialKind:Music, loved:false',
  visible: true,
  shuffle: false,
  songRepeat: 'off',
  size: 4440656665 
}
```
