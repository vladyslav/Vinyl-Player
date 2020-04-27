function play() {
    let audio = document.getElementById('audio');
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
}