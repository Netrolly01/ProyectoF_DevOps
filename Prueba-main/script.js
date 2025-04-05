const pokebola = document.getElementById('pokebola');
const panel = document.getElementById('panel');
const btnPikachu = document.getElementById('btn-pikachu');
const btnGengar = document.getElementById('btn-gengar');
const containerPokebola = document.getElementById('pokebola');

pokebola.addEventListener('click', () => {
    panel.classList.toggle('active');
    console.log('[MONITOREO] Pokebola clickeada - panel visible:', panel.classList.contains('active'));
});

btnGengar.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema', 'oscuro');
    console.log('[MONITOREO] Tema cambiado a: oscuro');
});

btnPikachu.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('tema', 'claro');
    console.log('[MONITOREO] Tema cambiado a: claro');
});

const guardarTema = () => {
    const temaGuardado = localStorage.getItem('tema');
    console.log('[MONITOREO] Tema guardado al iniciar:', temaGuardado);

    if (temaGuardado === 'oscuro') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
};

guardarTema();
