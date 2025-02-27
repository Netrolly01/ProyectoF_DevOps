const pokebola = document.getElementById('pokebola');
const panel = document.getElementById('panel');
const btnPikachu = document.getElementById('btn-pikachu');
const btnGengar = document.getElementById('btn-gengar');
const containerPokebola = document.getElementById('pokebola');

pokebola.addEventListener('click',()=>{
    panel.classList.toggle('active');
})

btnGengar.addEventListener('click',()=>{
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('tema','oscuro');
})

btnPikachu.addEventListener('click',()=>{
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('tema','claro');
})

const guardarTema = () =>{
    if(localStorage.getItem('tema') === 'oscuro'){
        document.body.classList.remove('ligth-mode');
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }
}

guardarTema();