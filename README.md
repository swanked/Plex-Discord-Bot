# Plex Discord Bot

## Installation

Look at either the [more automatic](docs/Setup_Docker) or the [more manual](docs/Setup) setup instructions.

If I am missing any steps, feel free to reach out or open an issue/bug in the Issues for this repository.

***

## Usage

1. Join a Discord voice channel.
2. Upon playing a song, the bot will join your channel and play your desired song.

***

## Commands

* `!plextest` : a test to see make sure your Plex server is connected properly, won't respond in Discord.
* `!clearqueue` : clears all songs in queue
* `!nextpage` : get next page of songs if desired song is not listed
* `!pause` : pauses current song if one is playing
* `!play <song title or artist>` : bot will join voice channel and play song if one song available.  if more than one, bot will return a list to choose from
* `!playsong <song number>` : plays a song from the generated song list
* `!removesong <song queue number>` : removes song by index from the song queue
* `!resume` : resumes song if previously paused
* `!skip` : skips the current song if one is playing and plays the next song in queue if it exists
* `!stop` : stops song if one is playing
* `!viewqueue` : displays current song queue

***
## Customization

### Docker Setup
Update the env.config file, then restart your container with these commands:
1. `docker container ls` (Note the container id of the one that looks right)
2. `docker restart -t 1 {CONTAINER_ID}`

### Manual setup

Update the `config\keys.js` file with your information:

```javascript
module.exports = {
  'clientId'      : 'DISCORD_CLIENT_ID',
  'clientSecret'  : 'DISCORD_CLIENT_SECRET',
  'username'      : 'DISCORD_BOT_USERNAME',
  'botToken'      : 'DISCORD_BOT_TOKEN',
};
```

And update the `config\plex.js` file with your Plex information:

```javascript
module.exports= {
  'hostname'    : 'IP_OF_THE_PLEX_SERVER',
  'port'        : 'PORT_OF_THE_PLEX_SERVER'
  'username'    : 'PLEX_USERNAME',
  'password'    : 'PLEX_PASSWORD',
  'options'     : {
    'identifier': 'A_UNIQUE_NAME',
    'product'   : 'Plex Discord Bot', // Can be whatever you want
    'version'   : '1.0.0', // Can be whatever you want
    'deviceName': 'Discord Bot', // Can be whatever you want
    'platform'  : 'Discord', // Can be whatever you want
    'device'    : 'Discord' // Can be whatever you want
  }
};
```

If you see any bugs or have any suggestions, use the issue tracker.  Thanks!

***

## To Do:
* [ ] Make !nextpage count continue to increase rather than restarting each page
* [ ] move to next gen javascript w/babel
* [ ] use uri/headers for plex.query as shown here:

```
return api.query({ uri: '/', extraHeaders: { 'X-TEST-HEADER': 'X-TEST-HEADER-VAL' } }).then(result => {
    expect(result).to.be.an('object');
    nockServer.done();
});
```

## Completed:
* [x] handle case where user types `!play` when another song is playing
* [x] make code look less bad
* [x] fix !stop again
* [x] make playlists
