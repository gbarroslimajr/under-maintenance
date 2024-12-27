function getUserLanguage() {
    return navigator.language || navigator.userLanguage;
}

function setLanguageContent(language) {
    if (language === "pt-BR" || language === "pt") {
        document.getElementById("maintenance-title").textContent = "Ops! Estamos em Manutenção";
        document.getElementById("maintenance-message").textContent = "Não se preocupe, logo estaremos de volta com novidades incríveis!";
    } else {
        document.getElementById("maintenance-title").textContent = "Oops! We're Under Maintenance";
        document.getElementById("maintenance-message").textContent = "Don't worry, we'll be back soon with amazing updates!";
    }
}

function getUserLanguageByIP() {
    // Substitua "YOUR_IP_GEOLOCATION_API_KEY" pela sua chave de API do serviço de geolocalização
    const apiEndpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=d1fc81d54557431189ba0c07cd7f2cad`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const userLanguage = data.country_code2.toLowerCase();
            setLanguageContent(userLanguage);
        })
        .catch(error => {
            console.error("Erro ao obter a localização do IP:", error);
            const userLanguage = getUserLanguage();
            setLanguageContent(userLanguage);
        });
}

function updateFooterYear() {
    const footerText = document.getElementById('footer-text');
    const currentYear = new Date().getFullYear();
    footerText.innerHTML = `© ${currentYear} inovartech.com. All rights reserved.`;
}


getUserLanguageByIP();
updateFooterYear();
