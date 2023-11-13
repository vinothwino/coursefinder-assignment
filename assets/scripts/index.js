const navToggler = document.getElementById('sidebar-nav-toggler');
const nav = document.getElementById('sidebar-nav');

function handleNavToggler(){
    nav.classList.toggle('tab-nav--collapsed')
}
navToggler.addEventListener('click', handleNavToggler)

window.onunload=function(){
    navToggler.removeEventListener('click',handleNavToggler)
}
