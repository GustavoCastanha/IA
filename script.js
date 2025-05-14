function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === '1234') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('app').style.display = 'grid';
  } else {
    alert('Usuário ou senha inválidos.');
  }
}

function mostrarCamera(camNumber, btn) {
  const main = document.getElementById('main-content');
  main.style.opacity = 0;

  document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  setTimeout(() => {
    main.innerHTML = `<video width="100%" height="100%" controls autoplay>
      <source src="cam${camNumber}.mp4" type="video/mp4">
      Seu navegador não suporta vídeo.
    </video>`;
    main.style.opacity = 1;
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
