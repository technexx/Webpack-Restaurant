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