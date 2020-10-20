console.log('click');
var video = document.getElementByById('presentation_video'),
    playBtn = document.getElementById('presentation_button'),
    controls = document.getElementById('presentation'),
    time = document.getElementById('presentation_Time');

// запускам или останавливаем воспроизведение
playBtn.addEventListener('click', function () {
    console.log('click');
    if (video.paused) {
        video.play();
        controls.classList.add('hidden');
    } else {
        video.pause();
        controls.classList.remove('hidden');
    }
}, false);

video.addEventListener('ended', function () {
    video.currentTime = 0;
    controls.classList.remove('hidden');
}, false);

video.addEventListener('click', function () {
    playBtn.click();
}, false);

video.addEventListener('timeupdate', function () {
    time.innerHTML = video.currentTime;
}, false);