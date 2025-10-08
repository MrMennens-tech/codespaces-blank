// main.js - basisstructuur voor Leerwereld

document.addEventListener('DOMContentLoaded', () => {
    // Thema toepassen
    const settings = JSON.parse(localStorage.getItem('leerwereld-settings')) || config.defaultSettings;
    document.body.classList.add('theme-' + settings.theme);

    // Instellingenknop
    const settingsBtn = document.getElementById('settings-btn');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            // Open instellingenmenu (nog te implementeren)
            alert('Instellingenmenu volgt!');
        });
    }
});
