import './style.css';
import createMainPage from './mainLayout.js';
import createMenu from './menuLayout.js'

createMainPage()

const tabOne = document.querySelector("#home-tab")

tabOne.addEventListener("click", () => {
    console.log("home clicked!")
})