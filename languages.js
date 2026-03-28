// languages.js
const translations = {
    en: {
        // Header
        headerName: "Nitesh Singh",
        headerSub: "Turning ideas into reality through code 🚀",
        viewGithub: "View GitHub →",
        contactMe: "Contact Me",
        
        // Skills
        skillsTitle: "Skills & Technologies",
        
        // Projects
        projectsTitle: "My Projects",
        viewOnGithub: "View on GitHub →",
        
        // Stats
        statsTitle: "GitHub Stats",
        stars: "⭐ Stars",
        repos: "📦 Repos",
        followers: "👨‍💻 Followers",
        
        // Contact
        contactTitle: "Get In Touch",
        contactForm: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            send: "Send Message",
            sending: "⏳ Sending...",
            success: "✅ Message received! Thank you!",
            error: "❌ Error sending message. Please try again."
        },
        
        // Footer
        resume: "📄 Resume",
        copyright: "©2026 My Portfolio"
    },
    
    hi: {
        // Header
        headerName: "नितेश सिंह",
        headerSub: "कोड के माध्यम से विचारों को वास्तविकता में बदलना 🚀",
        viewGithub: "GitHub देखें →",
        contactMe: "मुझसे संपर्क करें",
        
        // Skills
        skillsTitle: "कौशल और तकनीकें",
        
        // Projects
        projectsTitle: "मेरी परियोजनाएं",
        viewOnGithub: "GitHub पर देखें →",
        
        // Stats
        statsTitle: "GitHub आंकड़े",
        stars: "⭐ स्टार्स",
        repos: "📦 रेपो",
        followers: "👨‍💻 फॉलोअर्स",
        
        // Contact
        contactTitle: "संपर्क में रहें",
        contactForm: {
            name: "आपका नाम",
            email: "आपका ईमेल",
            message: "आपका संदेश",
            send: "संदेश भेजें",
            sending: "⏳ भेज रहे हैं...",
            success: "✅ संदेश प्राप्त हुआ! धन्यवाद!",
            error: "❌ संदेश भेजने में त्रुटि। कृपया पुनः प्रयास करें।"
        },
        
        // Footer
        resume: "📄 रिज्यूमे",
        copyright: "©2026 मेरा पोर्टफोलियो"
    },
    
    es: {
        // Header
        headerName: "Nitesh Singh",
        headerSub: "Convirtiendo ideas en realidad a través del código 🚀",
        viewGithub: "Ver GitHub →",
        contactMe: "Contáctame",
        
        // Skills
        skillsTitle: "Habilidades y Tecnologías",
        
        // Projects
        projectsTitle: "Mis Proyectos",
        viewOnGithub: "Ver en GitHub →",
        
        // Stats
        statsTitle: "Estadísticas de GitHub",
        stars: "⭐ Estrellas",
        repos: "📦 Repositorios",
        followers: "👨‍💻 Seguidores",
        
        // Contact
        contactTitle: "Ponte en Contacto",
        contactForm: {
            name: "Tu Nombre",
            email: "Tu Email",
            message: "Tu Mensaje",
            send: "Enviar Mensaje",
            sending: "⏳ Enviando...",
            success: "✅ ¡Mensaje recibido! ¡Gracias!",
            error: "❌ Error al enviar el mensaje. Por favor, intenta de nuevo."
        },
        
        // Footer
        resume: "📄 Currículum",
        copyright: "©2026 Mi Portafolio"
    },
    
    fr: {
        // Header
        headerName: "Nitesh Singh",
        headerSub: "Transformer les idées en réalité par le code 🚀",
        viewGithub: "Voir GitHub →",
        contactMe: "Me Contacter",
        
        // Skills
        skillsTitle: "Compétences et Technologies",
        
        // Projects
        projectsTitle: "Mes Projets",
        viewOnGithub: "Voir sur GitHub →",
        
        // Stats
        statsTitle: "Statistiques GitHub",
        stars: "⭐ Étoiles",
        repos: "📦 Dépôts",
        followers: "👨‍💻 Abonnés",
        
        // Contact
        contactTitle: "Entrez en Contact",
        contactForm: {
            name: "Votre Nom",
            email: "Votre Email",
            message: "Votre Message",
            send: "Envoyer le Message",
            sending: "⏳ Envoi en cours...",
            success: "✅ Message reçu! Merci!",
            error: "❌ Erreur lors de l'envoi du message. Veuillez réessayer."
        },
        
        // Footer
        resume: "📄 CV",
        copyright: "©2026 Mon Portfolio"
    }
};

// Get current language from localStorage or default to English
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Set language and save to localStorage
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    location.reload(); // Reload page with new language
}

// Get translation for a key
function t(key) {
    const lang = getCurrentLanguage();
    const keys = key.split('.');
    let value = translations[lang];
    
    for (let k of keys) {
        value = value[k];
    }
    
    return value || key;
}