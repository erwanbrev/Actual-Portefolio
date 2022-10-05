// formulaire avec formspree
window.formbutton = window.formbutton || function () { (formbutton.q = formbutton.q || []).push(arguments) };
/* customize formbutton below*/
formbutton("create", {
    action: "https://formspree.io/f/xgedewzz",
    title: "Puis-je vous aider ?",
    fields: [
        {
            type: "email",
            label: "Email:",
            name: "email",
            required: true,
            placeholder: "default@exemple.com"
        },
        {
            type: "textarea",
            label: "Message:",
            name: "message",
            placeholder: "Quel est votre message ?",
        },
        { type: "submit" }
    ],
    styles: {
        title: {
            backgroundColor: "#0F0F0F"
        },
        button: {
            backgroundColor: "#0F0F0F"
        }
    }
});

// ouverture du menu burger par clic sur le bouton burger
const btnBurger = document.querySelector(".click-btn-burger");
//affichage du menu burger suite au clic
const menuBurger = document.querySelector(".menu-burger-nav");
//fermeture du menu burger par clic sur fond noir droit
// const closingArea = document.querySelector("#bg-black-burger")
// fonction créée pour ouvrir le menu burger à l'aide du clic
btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("active");
    menuBurger.classList.toggle("open");
});

//fonction click ouvre extrait ou le cache
const overlayJoke = document.querySelector(".btn-extract");
const sectJoke = document.querySelector(".display-extract");
const sizeCartExtract = document.querySelector(".cart:nth-child(3)");
overlayJoke.addEventListener('click', () => {
    overlayJoke.classList.toggle("active");
    sectJoke.classList.toggle("open");
    sizeCartExtract.classList.toggle("active");
});

//extrait projet dad jokes
const button = document.querySelector('.container-joke button');
const jokeText = document.querySelector('.container-joke p');
const APICALL = "https://icanhazdadjoke.com/";

button.addEventListener('click', getJoke);

async function getJoke() {
    const config = {
        headers: {
            "Accept": 'application/json'
        }
    }
    const jokedata = await fetch(APICALL, config);
    const data = await jokedata.json();
    jokeText.innerHTML = data.joke;
}