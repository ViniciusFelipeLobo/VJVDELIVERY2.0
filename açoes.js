//importando os icones do desing.
lucide.createIcons();
//trocando a pagina de light para dark e também operando com uma animação.
const linkCss = document.querySelector('#css');
const botaoDarkLight = document.querySelector('.material-symbols-outlined');
botaoDarkLight.addEventListener('click', ()=>{
    botaoDarkLight.setAttribute('id', 'rotate');
    if(linkCss.getAttribute('href') ==='style.css'){
        linkCss.setAttribute('href', 'styledark.css');
    }else{
        linkCss.setAttribute('href', 'style.css');
    }
})
//Colocando a lista de maneira reponsiva para dispositivos Móveis.
const menu = document.querySelector('#menu');
const lista = document.querySelector('ul')
const larguraDaTela = window.innerWidth;
const section = document.querySelector('section');
const botoes = document.getElementsByTagName('button');
botoes[0].addEventListener('click', ()=>{
    // Quando o evento de clique for acionado mostrar o menu 
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
        // Enquanto o menu estiver acionado o botão vai ficar nesse coloração
        if(linkCss.getAttribute('href') === 'style.css'){
            botoes[0].style.backgroundColor = '#7f7f80';
        }else{
            botoes[0].style.backgroundColor = '#ffffff';
            botoes[0].style.color = '#8257e5';
        }
        // Aqui se a largura da tela estiver para dispositivos movéis vai fazer uma alteração de desing
        if(larguraDaTela <= 700){
            section.appendChild(lista);
    }else{
        menu.style.display = 'none';
        // Quando o menu não estiver acionado vai voltar para a coloração padrão
        if(linkCss.getAttribute('href') === 'style.css'){
            botoes[0].style.backgroundColor = '#8257e5';
            botoes[0].style.color = '#ffffff'
        }else{
            botoes[0].style.backgroundColor = '#8257e5';
            botoes[0].style.color = '#ffffff'
        }
    }

})


