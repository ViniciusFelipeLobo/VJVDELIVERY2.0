lucide.createIcons();
const linkCss = document.querySelector('#css');
const botaoDarkLight = document.querySelector('.material-symbols-outlined');
botaoDarkLight.addEventListener('click', ()=>{
    botaoDarkLight.setAttribute('id', 'rotate')
    if(linkCss.getAttribute('href') ==='style.css'){
        linkCss.setAttribute('href', 'styledark.css')
    }else{
        linkCss.setAttribute('href', 'style.css')
    }
})
