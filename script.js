function mostrarCamera(camNumber, btn) {
  const main = document.getElementById('main-content');
  main.style.opacity = 0;

  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  setTimeout(() => {
    main.innerHTML = `<video id="camera-video" width="100%" height="100%" controls autoplay>
      <source src="cam${camNumber}.mp4" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>`;
    main.style.opacity = 1;

    // Adiciona um event listener para tornar o vídeo tela cheia ao clicar
    const videoElement = document.getElementById('camera-video');
    if (videoElement) {
      videoElement.addEventListener('click', () => {
        if (videoElement.requestFullscreen) {
          videoElement.requestFullscreen();
        } else if (videoElement.mozRequestFullScreen) { /* Firefox */
          videoElement.mozRequestFullScreen();
        } else if (videoElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) { /* IE/Edge */
          videoElement.msRequestFullscreen();
        }
      });
    }
  }, 300);
}

function mostrarErros() {
  const main = document.getElementById('main-content');
  main.style.opacity = 0;
  setTimeout(() => {
    main.innerHTML = `
      <div class="erro-feed">
        <div class="erro-item">
          <img src="erro1.jpg" alt="Erro detectado">
          <p>Erro detectado na CÂMERA 2 às 14:35</p>
        </div>
        <div class="erro-item">
          <img src="erro2.jpg" alt="Erro detectado">
          <p>Erro detectado na CÂMERA 5 às 15:02</p>
        </div>
      </div>`;
    main.style.opacity = 1;
  }, 300);
}

function voltarTelaInicial() {
  const main = document.getElementById('main-content');
  main.style.opacity = 0;
  setTimeout(() => {
    main.innerHTML = '';
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  }, 500);
}