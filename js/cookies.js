// Fonction pour cacher le bandeau de consentement
function hideConsentBanner() {
    const consentBanner = document.getElementById("cookie-consent-banner");
    consentBanner.style.display = "none";
}

// Fonction pour gérer le clic sur le bouton de consentement
function handleConsentButtonClick() {
    hideConsentBanner();
    setCookie("cookie_consent", "true", 30); // Expire après 30 jours
    // Exécutez le code correspondant au consentement
    // ...
}

// Vérifie si le cookie de consentement existe déjà
if (checkCookie("cookie_consent")) {
    hideConsentBanner();
    // Exécutez le code correspondant au consentement
    // ...
} else {
    const consentButton = document.getElementById("cookie-consent-button");
    consentButton.addEventListener("click", handleConsentButtonClick);
}