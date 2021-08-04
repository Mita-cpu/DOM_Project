export const Header =( () => {
const navBar=document.createElement('div');

navBar.classList.add('nav-bar');
const logo=document.createElement('p');
logo.classList.add('logo');
logo.textContent='YourDevineFood';

const navOrder = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';

navOrder.appendChild(homeTab);
navOrder.appendChild(menuTab);
navBar.appendChild(logo);
navBar.appendChild(navOrder);
document.body.appendChild(navBar);

return navBar;

})();