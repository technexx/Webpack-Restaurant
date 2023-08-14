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

tabOne.addEventListener("click", () => {
    clearBody()
    createMainPage()
    clearTabBackgrounds()
    tabOne.style.backgroundImage = "url(../src/bloody.png)"

})

tabTwo.addEventListener("click", () => {
    clearBody()
    createMenu()
    clearTabBackgrounds()
    tabTwo.style.backgroundImage = "url(../src/bloody.png)"

})

tabThree.addEventListener("click", () => {
    clearBody()
    createContact()
    clearTabBackgrounds()
    tabThree.style.backgroundImage = "url(../src/bloody.png)"

})

function clearTabBackgrounds() {
    tabOne.style.backgroundImage = "url()"
    tabTwo.style.backgroundImage = "url()"
    tabThree.style.backgroundImage = "url()"
}