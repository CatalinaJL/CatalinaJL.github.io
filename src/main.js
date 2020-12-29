/*Close menu when click */

let optionsList = document.querySelector('.nav_list');
// let clickOption = document.querySelector('nav_link');
let welcome = document.getElementById('welcome');

welcome.addEventListener('click', () =>{
    optionsList.style.top="";
   optionsList.style.transition="transform 0.4s 0.4s cubic-bezier(0.75, 0, 0.25, 1), top 0.4s cubic-bezier(0.75, 0, 0.25, 1), background 0.2s cubic-bezier(0.75, 0, 0.25, 1)";
})