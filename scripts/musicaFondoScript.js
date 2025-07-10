    const audio = document.getElementById('musica');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');

    // Volumen inicial bajo
    audio.volume = 0.3;

    AudioController.register(audio);

    function togglePlay() {
      if (audio.paused) {
        audio.play();
        playPauseIcon.src = 'assets/img/playIcon.png';   // Cambia a ícono de pausa
        playPauseIcon.alt = 'Pausar';
      } else {
        audio.pause();
        playPauseIcon.src = 'assets/img/pauseIcon.png';    // Cambia a ícono de reproducir
        playPauseIcon.alt = 'Reproducir';
      }
    }