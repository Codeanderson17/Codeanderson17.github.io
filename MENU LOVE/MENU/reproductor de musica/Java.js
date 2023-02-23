const canciones = document.querySelectorAll('.cancion');

canciones.forEach(cancion => {
  const audio = cancion.querySelector('audio');
  const portada = cancion.querySelector('.portada');
  
  portada.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      portada.classList.add('reproduciendo');
    } else {
      audio.pause();
      portada.classList.remove('reproduciendo');
    }
  });
});
