// Creare's 'Implied Consent' EU Cookie Law Banner v:2.4
// Conceived by Robert Kent, James Bavington & Tom Foyster

var dropCookie = true;                      // false disables the Cookie, allowing you to style the banner
var cookieDuration = 14;                    // Number of days before the cookie expires, and the banner reappears
var cookieName = 'complianceCookie';        // Name of our cookie
var cookieValue = 'on';                     // Value of cookie

function createDiv() {
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id', 'cookie-law');
    div.innerHTML = '<p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our <a href="/privacy-cookies-policy/" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>. <a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';
    // Be advised the Close Banner 'X' link requires jQuery

    // bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
    // or
    bodytag.insertBefore(div, bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

    document.getElementsByTagName('body')[0].className += ' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible

    createCookie(window.cookieName, window.cookieValue, window.cookieDuration); // Create the cookie
}


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    if (window.dropCookie) {
        document.cookie = name + "=" + value + expires + "; path=/";
    }
}

function checkCookie(name) {
    var cookieName = name + "=";
    var str = document.cookie.split(';');
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        while (char.charAt(0) == ' ') char = char.substring(1, char.length);
        if (char.indexOf(cookieName) == 0) return char.substring(cookieName.length, char.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

window.onload = function () {
    if (checkCookie(window.cookieName) != window.cookieValue) {
        createDiv();
    }
}

function removeMe() {
    var element = document.getElementById('cookie-law');
    element.parentNode.removeChild(element);
}

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
const overlayJoke = document.querySelector("display-extract");
// const openJoke = element.style.visibility = 'visible';
overlayJoke.addEventListener('click', openJoke);

function openJoke(overlayJoke) {
    let choice;
    if (overlayJoke == 'click') {
        choice = 'visible';
    }
    else {
        choice = 'hidden';
    }
    return choice

}

//extrait projet dad jokes
const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');
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