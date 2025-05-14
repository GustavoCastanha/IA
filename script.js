function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'admin' && pass === '1234') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'grid';
        mostrarMultiplasCameras(); // Carrega a visualização múltipla após o login
    } else {
        alert('Usuário ou senha inválidos.');
    }
}

function mostrarMultiplasCameras() {
    const main = document.getElementById('main-content');
    main.innerHTML = ''; // Limpa qualquer conteúdo anterior
    main.style.display = 'grid'; // Garante que o main content seja exibido como grid
    main.style.opacity = 0;

    for (let i = 1; i <= 9; i++) { // Assumindo até 9 câmeras na visualização
        const cameraView = document.createElement('div');
        cameraView.classList.add('camera-view');

        // Aqui você pode adicionar um elemento <img> para imagens estáticas
        // ou um elemento <video> para vídeos das câmeras
        const img = document.createElement('img');
        img.src = `camera${i}.jpg`; // Substitua pelos seus caminhos de imagem
        img.alt = `Câmera ${i}`;

        cameraView.appendChild(img);
        main.appendChild(cameraView);
    }

    setTimeout(() => {
        main.style.opacity = 1;
    }, 300);
}

function mostrarCameraIndividual(camNumber, btn) {
    const main = document.getElementById('main-content');
    main.style.opacity = 0;
    main.style.display = 'flex'; // Para exibir uma única câmera em tela cheia

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
    main.style.display = 'flex';

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
        mostrarMultiplasCameras(); // Volta para a visualização múltipla
        document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    }, 500);
}