//importando os icones do desing.
lucide.createIcons();

//DECLARAÇÃO DAS VARIAVEIS
const menu = document.querySelector('#menu'), sobre = document.querySelector('#sobre'), lista = document.querySelector('ul'), larguraDaTela = window.innerWidth, section = document.querySelector('section'), botoes = document.getElementsByTagName('button'), seletorLanches = document.getElementById('seletorlanches'), seletorHotdogs = document.getElementById('seletorhotdogs'), seletorPasteis = document.getElementById('seletorpasteis'), tableLanches = document.getElementById('tablelanches'),tableHotDogs = document.getElementById('tablehotdogs'), tablePasteis = document.getElementById('tablepasteis'), table = document.querySelectorAll('table');

//trocando a pagina de light para dark e também operando com uma animação.
const linkCss = document.querySelector('#css');
const botaoDarkLight = document.querySelector('.material-symbols-outlined');
botaoDarkLight.addEventListener('click', ()=>{
    botaoDarkLight.setAttribute('id', 'rotate');
    if(linkCss.getAttribute('href') ==='CSS/style.css'){
        linkCss.setAttribute('href', 'CSS/styledark.css');
        let tabelaATiva = false;
        for(let i = 0; i < table.length; i++){
            if(table[i].style.display == 'flex'){
                tabelaATiva = true;
                break;
            }
        }
        //alteração para não ocorrer bugs quando trocar de light para dark e o botao estiver acionado
        if(menu.style.display == 'block'){
            botoes[0].style.backgroundColor = '#ffffff';
            botoes[0].style.color = '#8257e5';
        }else if(sobre.style.display == 'block'){
            botoes[1].style.backgroundColor = '#ffffff';
            botoes[1].style.color = '#8257e5';
        }else if(tabelaATiva){
            botoes[0].style.backgroundColor = '#ffffff';
            botoes[0].style.color = '#8257e5';
        }
    }else{
        linkCss.setAttribute('href', 'CSS/style.css');
        let tabelaATiva = false;
        for(let i = 0; i < table.length; i++){
            if(table[i].style.display == 'flex'){
                tabelaATiva = true;
                break;
            }
        }
        //alteração para não ocorrer bugs quando trocar de dark para light e o botao estiver acionado
        if(menu.style.display == 'block'){
            botoes[0].style.backgroundColor = '#7f7f80';
            botoes[0].style.color = '#ffffff';
        }else if(sobre.style.display == 'block'){
            botoes[1].style.backgroundColor = '#7f7f80';
            botoes[1].style.color = '#ffffff';
        }
        //Quando o cardapio de lanches estiver aberto e trocar de tela vai trocar a cor de dark para light quando acionado o botão 
        else if(tabelaATiva){
            botoes[0].style.backgroundColor = '#7f7f80';
            botoes[0].style.color = '#ffffff';
        }
    }
})
//Colocando a lista de maneira reponsiva para dispositivos Móveis.
botoes[0].addEventListener('click', ()=>{
    let tabelaATiva = false;
    for(let i = 0; i < table.length; i++){
        if(table[i].style.display == 'flex'){
            tabelaATiva = true;
            break;
        }
    }
    if(menu.style.display == 'none' && tabelaATiva){
        for(let i = 0; i < table.length; i++){
            if(menu.style.display == 'none' && table[i].style.display == 'flex'){
                table[i].style.display = 'none';
                menu.style.display = 'none';
                botoes[0].style.backgroundColor = '#8257e5';
                botoes[0].style.color = '#ffffff'
            }
        }    
        
    } 
        // Quando o evento de clique for acionado mostrar o menu 
        else if(menu.style.display == 'none'){
            menu.style.display = 'block';
            sobre.style.display = 'none';
            // Enquanto o menu estiver acionado o botão vai ficar nesse coloração
            if(linkCss.getAttribute('href') === 'CSS/style.css'){
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
        /* Enquanto o menu estiver acionado o botão vai ficar nesse coloração
        tambem evitando do outro botão ficar acionado*/
        if(linkCss.getAttribute('href') === 'CSS/style.css'){
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
        table.style.display = 'none';
        /* Enquanto o sobre estiver acionado o botão vai ficar nesse coloração
        tambem evitando do outro botão ficar acionado*/
       if(linkCss.getAttribute('href') === 'CSS/style.css'){
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
        if(linkCss.getAttribute('href') === 'CSS/style.css'){
            botoes[1].style.backgroundColor = '#8257e5';
            botoes[1].style.color = '#ffffff'
        }else{
            botoes[1].style.backgroundColor = '#8257e5';
            botoes[1].style.color = '#ffffff'
        }
    }

})
// Seleção dos Botões do cardápio para abrir as opções desejadas, esse código abaixo é usado também na linha 62,63
seletorLanches.addEventListener('click', ()=>{
    if(seletorLanches.checked){
        tableLanches.style.display = 'flex';
        menu.style.display = 'none';

    }
})
seletorHotdogs.addEventListener('click', ()=>{
    if(seletorHotdogs.checked){
        tableHotDogs.style.display = 'flex';
        menu.style.display = 'none';

    }
})
seletorPasteis.addEventListener('click', ()=>{
    if(seletorPasteis.checked){
        tablePasteis.style.display = 'flex';
        menu.style.display = 'none';

    }
})



