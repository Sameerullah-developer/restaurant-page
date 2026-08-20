import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

console.log("Restuarant page is running!");

loadHome();

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");




const switchTab = (loadPage) => {
    
    content.textContent = "";
    loadPage();
}

homeButton.addEventListener("click", () => {
    switchTab(loadHome);
});

menuButton.addEventListener("click", () => {
    switchTab(loadMenu);
});

contactButton.addEventListener("click", () => {
    switchTab(loadContact);
});




