
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

const section=document.createElement('div')
section.classList.add('section');



const slideContainer=document.createElement('div');
slideContainer.classList.add('container');

const mySlideShow=document.createElement('div');
mySlideShow.classList.add('myslides');
const pictureSlides=document.createElement('div');
pictureSlides.classList.add('pictureslides');
let img1=document.createElement('img');
img1.src='images/img11.jpg';
let text=document.createElement('div');
text.classList.add('text');
text.textContent='your cakes';

const mySlideShow2=document.createElement('div');
mySlideShow2.classList.add('myslides');
const pictureSlides2=document.createElement('div');
pictureSlides2.classList.add('pictureslides');
let img2=document.createElement('img');
img2.src='images/img2.jpg';
let text2=document.createElement('div');
text2.classList.add('text');
text2.textContent='your cakes';

const mySlideShow3=document.createElement('div');
mySlideShow3.classList.add('myslides');
const pictureSlides3=document.createElement('div');
pictureSlides3.classList.add('pictureslides');
let img3=document.createElement('img');
img3.src='images/img3.jpg';
let text3=document.createElement('div');
text3.classList.add('text');
text3.textContent='your cakes';

const mySlideShow4=document.createElement('div');
mySlideShow4.classList.add('myslides');
const pictureSlides4=document.createElement('div');
pictureSlides4.classList.add('pictureslides');
let img4=document.createElement('img');
img4.src='images/img4.jpg';
let text4=document.createElement('div');
text4.classList.add('text');
text4.textContent='your cakes';






pictureSlides4.appendChild(img4);
pictureSlides3.appendChild(img3);
pictureSlides2.appendChild(img2);
pictureSlides.appendChild(img1);
pictureSlides3.appendChild(text3);
pictureSlides4.appendChild(text4);
pictureSlides2.appendChild(text2);
pictureSlides.appendChild(text);
mySlideShow.appendChild(pictureSlides);
mySlideShow2.appendChild(pictureSlides2);
mySlideShow3.appendChild(pictureSlides3);
mySlideShow4.appendChild(pictureSlides4);

navOrder.appendChild(homeTab);
navOrder.appendChild(menuTab);
navBar.appendChild(logo);
navBar.appendChild(navOrder);
slideContainer.appendChild(mySlideShow);
slideContainer.appendChild(mySlideShow2);
slideContainer.appendChild(mySlideShow3);
slideContainer.appendChild(mySlideShow4);
document.body.appendChild(navBar);
document.body.appendChild(section)
document.body.appendChild(slideContainer);
