const body = document.querySelector('body');
const progressFill = document.getElementById('progressFill');
const percentLabel = document.getElementById('percentLabel');

document.addEventListener('scroll', updateProgress);

function updateProgress() {
  const bodyHeight = body.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollOffset = window.scrollY;
  const percentage = (scrollOffset / (bodyHeight - windowHeight)) * 100;
  
  progressFill.style.width = `${percentage}%`;
  displayPercentage(percentage)
}

function displayPercentage(p) {
  percentLabel.textContent = `${Math.floor(p)}%`;
}

