let progressBarInner = document.getElementById('progress-bar-inner');
let progressText = document.getElementById('progress-text');

let progress = 0;

setInterval(() => {
  progress += 10;
  if (progress > 100) {
    progress = 100;
  }
  progressBarInner.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
}, 500);