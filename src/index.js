import './style.css';
import {createMainPage} from './mainLayout.js';
import {createNav} from './mainLayout.js';
import createMenu from './menuLayout.js'

createNav()
createMainPage()

const tabOne = document.querySelector("#home-tab")
const tabTwo = document.querySelector("#menu-tab")
const tabThree = document.querySelector("#contact-tab")

tabOne.addEventListener("click", () => {
    createMainPage()
})

tabTwo.addEventListener("click", () => {
    const header = document.querySelector(".header")
    const intro = document.querySelector(".intro")
    const hours = document.querySelector(".hours")
    header.remove()
    createMenu()
})

tabThree.addEventListener("click", () => {

})