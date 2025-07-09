const selectSound = new Audio("/assets/sounds/slideSound.mp3");
  
selectSound.volume = 0.2
  
function playSlideSound() {
    selectSound.currentTime = 0;
    selectSound.play();
}

function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
    playSlideSound();
  }
