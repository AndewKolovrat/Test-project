var video = document.getElementById('presentation_video'),
    playBtn = document.getElementById('presentation_button'),
    time = document.getElementById('presentation_Time'),
    burger = document.getElementById('burger'),
    menu = document.getElementById('nav');

burger.addEventListener('click', function () {
    if (burger.classList.contains('burger_active'))
        closeMenu();
    else openMenu();
}, false);

function openMenu() {
    burger.classList.add('burger_active');
    menu.classList.add('open-menu')
    document.body.classList.add('fixed-page');
}
function closeMenu() {
    burger.classList.remove('burger_active');
    menu.classList.remove('open-menu');
    document.body.classList.remove('fixed-page');
}

// запускам или останавливаем воспроизведение
playBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playBtn.classList.add('visually-hidden');
    } else {
        video.pause();
        playBtn.classList.remove('visually-hidden');
    }
}, false);

video.addEventListener('ended', function () {
    video.currentTime = 0;
    playBtn.classList.remove('visually-hidden');
}, false);

video.addEventListener('click', function () {
    playBtn.click();
}, false);

video.addEventListener('timeupdate', function () {
    time.innerHTML = secondsToTime(video.currentTime);
}, false);

// рассчет отображаемого времени
function secondsToTime(time) {

    var h = Math.floor(time / (60 * 60)),
        dm = time % (60 * 60),
        m = Math.floor(dm / 60),
        ds = dm % 60,
        s = Math.ceil(ds);
    if (s === 60) {
        s = 0;
        m = m + 1;
    }
    if (s < 10) {
        s = '0' + s;
    }
    if (m === 60) {
        m = 0;
        h = h + 1;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (h === 0) {
        fulltime = m + ':' + s;
    } else {
        fulltime = h + ':' + m + ':' + s;
    }
    return fulltime;
}