function carregarMiniaturas() {
  const main = document.getElementById('main-content');
  main.innerHTML = ''; // Limpa qualquer conteúdo anterior
  for (let i = 1; i <= 8; i++) {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('camera-thumbnail-container');
    videoContainer.innerHTML = `<video width="100%" height="100%" muted autoplay loop onclick="mostrarCamera(${i}, this)">
      <source src="cam${i}.mp4" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>`;
    main.appendChild(videoContainer);
  }
  main.style.opacity = 1;
}

function mostrarCamera(camNumber, videoElement) {
  const main = document.getElementById('main-content');
  main.style.opacity = 0;

  // Remove a classe 'active' de todos os botões da sidebar
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));

  setTimeout(() => {
    main.innerHTML = `<video id="full-camera-video" width="100%" height="100%" controls autoplay>
      <source src="cam${camNumber}.mp4" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>`;
    main.style.opacity = 1;

    // Adiciona um event listener para tornar o vídeo tela cheia ao clicar
    const fullVideoElement = document.getElementById('full-camera-video');
    if (fullVideoElement) {
      fullVideoElement.addEventListener('click', () => {
        if (fullVideoElement.requestFullscreen) {
          fullVideoElement.requestFullscreen();
        } else if (fullVideoElement.mozRequestFullScreen) { /* Firefox */
          fullVideoElement.mozRequestFullScreen();
        } else if (fullVideoElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          fullVideoElement.webkitRequestFullscreen();
        } else if (fullVideoElement.msRequestFullscreen) { /* IE/Edge */
          fullVideoElement.msRequestFullscreen();
        }
      });
    }
  }, 300);
}

function selecionarCamera(camNumber, btn) {
  // Remove a classe 'active' de todos os botões
  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  // Adiciona a classe 'active' ao botão clicado
  btn.classList.add('active');
  mostrarCamera(camNumber);
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
    carregarMiniaturas(); // Recarrega as miniaturas ao voltar para a tela inicial
    document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  }, 500);
}