import './style.css';
import createMainPage from './mainLayout.js';
import createMenu from './menuLayout.js'
import {test} from "./mainLayout.js"

function homePage() {
    createMainPage()
    console.log("home")
}

homePage()