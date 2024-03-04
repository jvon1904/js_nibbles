const body = document.querySelector('body');
const progressFill = document.getElementById('progressFill');
const percentLabel = document.getElementById('percentLabel');

function updateProgress() {
  const scrolled = window.scrollY;
  const bodyHeight = body.offsetHeight;
  const windowHeight = window.innerHeight;
  const percentage = (scrolled / (bodyHeight - windowHeight)) * 100;
  
  progressFill.style.width = `${percentage}%`;
  displayPercentage(percentage)
}

function displayPercentage(p) {
  percentLabel.textContent = `${Math.floor(p)}%`;
}

document.addEventListener('scroll', updateProgress);

updateProgress();