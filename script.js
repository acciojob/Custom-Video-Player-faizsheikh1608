/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlayPause() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚'; // Change to pause symbol
  } else {
    video.pause();
    toggle.textContent = '►'; // Change to play symbol
  }
}

// Update progress bar
function updateProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${progressPercentage}%`;
}

// Skip buttons functionality
function skip() {
  video.currentTime += parseFloat(this.dataset.skip); // Skip by the value in data-skip attribute
}

// Handle range sliders (volume and playback speed)
function handleRangeUpdate() {
  video[this.name] = this.value;
}

// Event listeners
toggle.addEventListener('click', togglePlayPause); // Play/pause toggle
video.addEventListener('timeupdate', updateProgress); // Update progress bar as the video plays
skipButtons.forEach(button => button.addEventListener('click', skip)); // Skip buttons
ranges.forEach(range => range.addEventListener('input', handleRangeUpdate)); // Volume and playback speed sliders

// Make the video start with initial values for volume and playback speed
ranges[0].value = video.volume; // Set initial volume slider to the current video volume
ranges[1].value = video.playbackRate;