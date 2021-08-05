export const Header =( () => {
 
// Creating Dom elements for the Navigation bar and adding text to the elements    

const navBar=document.createElement('div');
navBar.classList.add('nav-bar');
const logo=document.createElement('p');
logo.classList.add('logo');
logo.textContent='YourDevineCakes';

const navOrder = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');

homeTab.textContent = 'Home';
menuTab.textContent = 'OurCakes';


//Appending elements to the parents
navOrder.appendChild(homeTab);
navOrder.appendChild(menuTab);
navBar.appendChild(logo);
navBar.appendChild(navOrder);
document.body.appendChild(navBar);

return navBar;

})();