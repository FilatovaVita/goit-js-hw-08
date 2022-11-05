import Player from '@vimeo/player';

const player = new Player('handstick', {
  id: 'vimeo - player',
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});

const onPlay = function (data) {};

player.on('timeupdate', onPlay);
localStorage.setItem('videoplayer-current-time', onPlay);
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
