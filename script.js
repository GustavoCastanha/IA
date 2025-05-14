function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    if (user === 'admin' && pass === '1234') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('app').style.display = 'grid';
        carregarMiniaturas(); // Carrega as miniaturas após o login
    } else {
        alert('Usuário ou senha inválidos.');
    }
}

function carregarMiniaturas() {
    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.innerHTML = ''; // Limpa qualquer miniatura anterior

    for (let i = 1; i <= 8; i++) {
        const thumbnailItem = document.createElement('div');
        thumbnailItem.classList.add('thumbnail-item');
        thumbnailItem.onclick = () => mostrarCamera(i, null); // Ao clicar na miniatura, mostra a câmera em tela cheia

        const img = document.createElement('img');
        img.src = `thumb${i}.jpg`; // Certifique-se de ter imagens de miniatura (thumb1.jpg, thumb2.jpg, etc.)
        img.alt = `Câmera ${i}`;

        const label = document.createElement('div');
        label.classList.add('thumbnail-label');
        label.textContent = `CÂMERA ${i}`;

        thumbnailItem.appendChild(img);
        thumbnailItem.appendChild(label);
        thumbnailGrid.appendChild(thumbnailItem);
    }
}

function mostrarCamera(camNumber, btn) {
    const main = document.getElementById('main-content');
    main.style.opacity = 0;
    main.style.display = 'flex'; // Garante que o main content seja visível

    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.style.display = 'none'; // Esconde a grade de miniaturas

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
    main.style.display = 'flex'; // Garante que o main content seja visível

    const thumbnailGrid = document.getElementById('thumbnailGrid');
    thumbnailGrid.style.display = 'none'; // Esconde a grade de miniaturas

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
        main.style.display = 'none'; // Esconde o main content
        const thumbnailGrid = document.getElementById('thumbnailGrid');
        thumbnailGrid.style.display = 'grid'; // Mostra a grade de miniaturas
        document.querySelectorAll('.sidebar button').forEach(b => b.classList.remove('active'));
    }, 500);
}