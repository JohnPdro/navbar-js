// classList - mostra/seleciona todas as classes
// contains - verifica a classList por uma class especifica
// add - adiciona class
// remove - remove class
// toggle - alterna classes 

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('random'));
    // console.log(links.classList.contains('links'));

    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }else{
    //     links.classList.add('show-links');
    // }
    
    links.classList.toggle('show-links');
});