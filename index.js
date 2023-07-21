document.addEventListener('DOMContentLoaded', () => {
    const mediaPlays = document.getElementsByClassName('mediaPlay');
    const playPauseButtons = document.getElementsByClassName('playPauseButton');
    const volumeSliders = document.getElementsByClassName('volumeSlider');

    function togglePlayPause(mediaPlay, playPauseButton) {
        if (mediaPlay.paused) {
            mediaPlay.play();
            playPauseButton.textContent = 'Pause';
        } else {
            mediaPlay.pause();
            playPauseButton.textContent = 'Play';
        }
    }

    Array.from(playPauseButtons).forEach((playPauseButton, index) => {
        const mediaPlay = mediaPlays[index];
        playPauseButton.addEventListener('click', () => {
            togglePlayPause(mediaPlay, playPauseButton);
        });
    });

    Array.from(volumeSliders).forEach((volumeSlider, index) => {
        const mediaPlay = mediaPlays[index];
        volumeSlider.addEventListener('input', () => {
            mediaPlay.volume = volumeSlider.value;
        });
    });
});