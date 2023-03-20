import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on("timeupdate", throttle(playCurrentTime, 1000));

function playCurrentTime(event) {
    let currentTime = event.seconds
    localStorage.setItem("videoplayer-current-time", currentTime)
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
    console.log(typeof videoplayer-current-time)
}).catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video's duration
            break;
        default:
            // some other error occured
            break;
    }
});
