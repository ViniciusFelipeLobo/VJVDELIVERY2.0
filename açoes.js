 //importando os icones do desing.
lucide.createIcons();
//trocando a pagina de light para dark e também operando com uma animação.
const linkCss = document.querySelector('#css');
const botaoDarkLight = document.querySelector('.material-symbols-outlined');
botaoDarkLight.addEventListener('click', ()=>{
    botaoDarkLight.setAttribute('id', 'rotate');
    if(linkCss.getAttribute('href') ==='style.css'){
        linkCss.setAttribute('href', 'styledark.css');
        //alteração para não ocorrer bugs quando trocar de light para dar e o botao estiver acionado
        if(menu.style.display == 'block'){
            botoes[0].style.backgroundColor = '#ffffff';
            botoes[0].style.color = '#8257e5';
        }else if(sobre.style.display == 'block'){
            botoes[1].style.backgroundColor = '#ffffff';
            botoes[1].style.color = '#8257e5';
        }
    }else{
        linkCss.setAttribute('href', 'style.css');
        //alteração para não ocorrer bugs quando trocar de light para dar e o botao estiver acionado
        if(menu.style.display == 'block'){
            botoes[0].style.backgroundColor = '#7f7f80';
            botoes[0].style.color = '#ffffff';
        }else if(sobre.style.display == 'block'){
            botoes[1].style.backgroundColor = '#7f7f80';
            botoes[1].style.color = '#ffffff';
        }
    }
})
//Colocando a lista de maneira reponsiva para dispositivos Móveis.
const menu = document.querySelector('#menu');
const sobre = document.querySelector('#sobre');
const lista = document.querySelector('ul')
const larguraDaTela = window.innerWidth;
const section = document.querySelector('section');
const botoes = document.getElementsByTagName('button');
botoes[0].addEventListener('click', ()=>{
    // Quando o evento de clique for acionado mostrar o menu 
    if(menu.style.display == 'none'){
        menu.style.display = 'block';
        sobre.style.display = 'none';
        // Enquanto o menu estiver acionado o botão vai ficar nesse coloração
        if(linkCss.getAttribute('href') === 'style.css'){
            botoes[0].style.backgroundColor = '#7f7f80';
            botoes[1].style.backgroundColor = '#8257e5';
            botoes[1].style.color = '#ffffff';
        }else{
            botoes[0].style.backgroundColor = '#ffffff';
            botoes[0].style.color = '#8257e5';
            botoes[1].style.backgroundColor = '#8257e5';
            botoes[1].style.color = '#ffffff';

        }
        /* Aqui se a largura da tela estiver para dispositivos movéis vai fazer uma 
        alteração de desing, tirando a lista de naveção do header e colocando ela na area 
        do section*/
        if(larguraDaTela <= 700){
            section.appendChild(lista);
        }
    }else{
        menu.style.display = 'none';
        //aqui toda vez que for fechada a lista o cardapio é fechado junto
        table.style.display ='none';
        /* Enquanto o menu estiver acionado o botão vai ficar nesse coloração
        tambem evitando do outro botão ficar acionado*/
        if(linkCss.getAttribute('href') === 'style.css'){
            botoes[0].style.backgroundColor = '#8257e5';
            botoes[0].style.color = '#ffffff'
        }else{
            botoes[0].style.backgroundColor = '#8257e5';
            botoes[0].style.color = '#ffffff'
        }
    }

})
botoes[1].addEventListener('click', ()=>{
    // Quando o evento de clique for acionado mostrar o menu 
    if(sobre.style.display == 'none'){
        sobre.style.display = 'block';
        menu.style.display = 'none';
        /* Enquanto o sobre estiver acionado o botão vai ficar nesse coloração
        tambem evitando do outro botão ficar acionado*/
       if(linkCss.getAttribute('href') === 'style.css'){
            botoes[1].style.backgroundColor = '#7f7f80';
            botoes[0].style.backgroundColor = '#8257e5';
            botoes[0].style.color = '#ffffff';
        }else{
            botoes[1].style.backgroundColor = '#ffffff';
            botoes[1].style.color = '#8257e5';
            botoes[0].style.backgroundColor = '#8257e5';
            botoes[0].style.color = '#ffffff';
        }
        /* Aqui se a largura da tela estiver para dispositivos movéis vai fazer uma 
        alteração de desing, tirando a lista de naveção do header e colocando ela na area 
        do section*/
        if(larguraDaTela <= 700){
            section.appendChild(lista);
        }
    }else{
        sobre.style.display = 'none';
        // Quando o sobre não estiver acionado vai voltar para a coloração padrão
        if(linkCss.getAttribute('href') === 'style.css'){
            botoes[1].style.backgroundColor = '#8257e5';
            botoes[1].style.color = '#ffffff'
        }else{
            botoes[1].style.backgroundColor = '#8257e5';
            botoes[1].style.color = '#ffffff'
        }
    }

})
// Seleção dos Botões do cardápio para abrir as opções desejadas, esse código abaixo é usado também na linha 62,63
const seletorLanches = document.getElementById('seletorlanches');
const table = document.querySelector('table');
seletorLanches.addEventListener('click', ()=>{
    if(seletorLanches.checked){
        table.style.display = 'flex';
    }
})



