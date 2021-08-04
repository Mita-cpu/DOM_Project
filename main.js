import {Home} from './home.js'
import {Header} from './header.js'

const body= document.querySelector('body');
const container=document.querySelector('#container');
container.appendChild(Header.navBar);
container.appendChild(Home.slideContainer);