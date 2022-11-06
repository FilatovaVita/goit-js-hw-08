import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
});

function onStart() {
  const timePlay = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  if (timePlay) {
    player.setCurrentTime(timePlay);
  }
}

onStart();
