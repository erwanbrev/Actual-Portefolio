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
// fonction créée pour ouvrir le menu burger à l'aide du clic
btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("active");
    menuBurger.classList.toggle("open");
});
//fonction click ouvre / ferme extrait
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

// cookies du site
// Fonction pour définir un cookie
function setCookie(name, value, expirationDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
    const cookieName = name + "=";
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ')
            cookie = cookie.substring(1);
        if (cookie.indexOf(cookieName) === 0)
            return cookie.substring(cookieName.length, cookie.length);
    }
    return "";
}

// Fonction pour vérifier si un cookie existe
function checkCookie(name) {
    const cookieValue = getCookie(name);
    return cookieValue !== "";
}

// Exemple d'utilisation
if (checkCookie("cookie_consent")) {
    // Le cookie existe, exécutez le code correspondant
} else {
    // Le cookie n'existe pas, demandez le consentement de l'utilisateur
    // Une fois que l'utilisateur a donné son consentement, définissez le cookie
    setCookie("cookie_consent", "true", 30); // Expire après 30 jours
}

