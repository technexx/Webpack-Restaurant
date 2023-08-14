import './style.css';
import {createNav} from './mainLayout.js';
import {createMainPage} from './mainLayout.js';
import {clearBody} from './mainLayout.js';
import {createMenu} from './menuLayout.js';
import {createContact} from './contactLayout';

createNav()
createMainPage()

const tabOne = document.querySelector("#home-tab")
const tabTwo = document.querySelector("#menu-tab")
const tabThree = document.querySelector("#contact-tab")

//"Home" folder is /dist since that is where our main.js file is generated.
tabOne.style.backgroundImage = "url(../src/bloody.png)"
// tabOne.style.backgroundSize = "300px 300px"

tabOne.addEventListener("click", () => {
    clearBody()
    createMainPage()
})

tabTwo.addEventListener("click", () => {
    clearBody()
    createMenu()
})

tabThree.addEventListener("click", () => {
    clearBody()
    createContact()
})