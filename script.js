let iconMenu = document.querySelector('.iconBurger');
let menuBody = document.querySelector('.menu');

if (iconMenu){
 iconMenu.addEventListener('click', function (e){
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('active');
 })
}