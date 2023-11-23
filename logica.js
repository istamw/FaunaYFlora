let isPlaying = false;
let audio = new Audio();
audio.src="/music/Amenábar.mp3"

function playOrPause() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.getElementById("reproducir").className = "fas fa-play";

    } else {
        audio.play();
        isPlaying = true;
        document.getElementById("reproducir").className = "fas fa-compact-disc fa-spin";

    }
}