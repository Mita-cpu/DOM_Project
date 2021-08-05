 export const Home = (() => {

// Creating DOM elements for the slideshow and adding text to the elements
const slideContainer=document.createElement('div');
slideContainer.classList.add('container');

const pictureSlides=document.createElement('div');
pictureSlides.classList.add('pictureslides');
let img1=document.createElement('img');
img1.classList.add('slide')
img1.src='images/img11.jpg';
let text=document.createElement('p');
text.classList.add('text');
text.textContent='Custom Cakes For Every Season';

const pictureSlides2=document.createElement('div');
pictureSlides2.classList.add('pictureslides');
let img2=document.createElement('img');
img2.classList.add('slide')
img2.src='images/s1.jpg';
let text2=document.createElement('p');
text2.classList.add('text');
text2.textContent='Our Mouth Watering Cakes Now Available Online';
const orderButton=document.createElement('p');
orderButton.classList.add('shopnow')
orderButton.textContent='SHOP NOW'

const pictureSlides3=document.createElement('div');
pictureSlides3.classList.add('pictureslides');
let img3=document.createElement('img');
img3.classList.add('slide');
img3.src='images/cup.jpg';
let text3=document.createElement('p');
text3.classList.add('text');
text3.textContent='Birthday Cakes, Baby Shower Cakes, Wedding Cakes, Cupcakes And More!';

// Appending elements to the parent
pictureSlides2.appendChild(orderButton)
pictureSlides3.appendChild(img3);
pictureSlides2.appendChild(img2);
pictureSlides.appendChild(img1);
pictureSlides3.appendChild(text3);
pictureSlides2.appendChild(text2);
pictureSlides.appendChild(text);
slideContainer.appendChild(pictureSlides3);
slideContainer.appendChild(pictureSlides2);
slideContainer.appendChild(pictureSlides);
document.body.appendChild(slideContainer)

return slideContainer;
}) ();
