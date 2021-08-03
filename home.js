
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





const slideContainer=document.createElement('div');
slideContainer.classList.add('container');


const pictureSlides=document.createElement('div');
pictureSlides.classList.add('pictureslides');
let img1=document.createElement('img');
img1.classList.add('slide')
img1.src='images/img11.jpg';
let text=document.createElement('div');
text.classList.add('text');
text.textContent='your cakes';


const pictureSlides2=document.createElement('div');
pictureSlides2.classList.add('pictureslides');
let img2=document.createElement('img');
img2.classList.add('slide')
img2.src='images/img2.jpg';
let text2=document.createElement('div');
text2.classList.add('text');
text2.textContent='your cakes';


const pictureSlides3=document.createElement('div');
pictureSlides3.classList.add('pictureslides');
let img3=document.createElement('img');
img3.classList.add('slide');
img3.src='images/img3.jpg';
let text3=document.createElement('div');
text3.classList.add('text');
text3.textContent='your cakes';









pictureSlides3.appendChild(img3);
pictureSlides2.appendChild(img2);
pictureSlides.appendChild(img1);
pictureSlides3.appendChild(text3);
pictureSlides2.appendChild(text2);
pictureSlides.appendChild(text);



navOrder.appendChild(homeTab);
navOrder.appendChild(menuTab);
navBar.appendChild(logo);
navBar.appendChild(navOrder);
slideContainer.appendChild(pictureSlides3);
slideContainer.appendChild(pictureSlides2);
slideContainer.appendChild(pictureSlides);




document.body.appendChild(slideContainer)

document.body.appendChild(navBar);
