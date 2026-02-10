export const languages = {
    en: 'English',
    es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Work',
        'nav.experience': 'Trajectory',
        'nav.contact': 'Contact',
        'nav.tech': 'Tech', // Keeping just in case, though not in the strict list
        'nav.education': 'Education', // Keeping just in case
        'nav.menu': 'Menu',
        'nav.cta': "Let's Talk",

        // Hero
        'hero.badge': 'Open to Work & Collabs',
        'hero.title.part1': 'Engineering Scalable',
        'hero.title.part2': '& Aesthetic Software.',
        'hero.subtitle': 'Full-stack developer focused on Clean Architecture, high-performance interfaces, and scalable backend solutions.',
        'hero.cta': 'Explore',
        'hero.downloadbtn': "Download CV",

        // About
        'about.title': 'About Me', // Kept for structure, though not explicitly in the "Content Refactor" list, usually "About Me" label is fine.
        'about.heading': 'Code Quality Meets',
        'about.heading.span': 'User Experience.',
        'about.description': "I am a software developer driven by technical excellence. I don't just write code; I design systems. Whether it's optimizing a React frontend for speed or structuring a Node.js backend with Hexagonal Architecture, my goal is always the same: robustness, scalability, and maintainability.",
        'about.stats.years': 'Years Coding',
        'about.stats.repos': 'Repositories',
        'about.stats.typeSafe': 'Type-Safe',
        'about.skills.server': 'Server Side & Architecture',
        'about.skills.interface': 'Interface & Interactivity',
        'about.skills.data': 'Database Strategy',
        'about.skills.tools': 'CI/CD & Tools',

        // Projects
        'projects.subtitle': 'Projects', // Standard label
        'projects.title': 'Most',
        'projects.title.span': 'Relevant',
        'projects.playDemo': 'Play Demo',
        'projects.visitSite': 'Visit site',

        // Experience
        'experience.title': 'Professional',
        'experience.title.span': 'Experience',

        // Education
        'education.title': 'Education',
        'education.title.span': 'Academy',

        // Contact
        'contact.badge': 'Do you have an idea?',
        'contact.title': 'Ready to build',
        'contact.title.span': 'scalable solutions?',
        'contact.subtitle': 'Currently open to Full-Stack roles and technical collaborations.',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Your Message',
        'contact.form.placeholder.email': 'hello@example.com',
        'contact.form.placeholder.message': 'Tell me about your project...',
        'contact.form.submit': "Send Message",
        'contact.form.sending': 'Sending...',
        'contact.form.success': 'Message received! I will reply soon.',
        'contact.form.error': 'There was an error. Please try again.',

        // Footer
        'footer.title': 'Let\'s Build Scalable Solutions.',
        'footer.subtitle': 'Built with Astro.',
        'footer.repo': 'View Source Code',
        'footer.status': 'Online',
        'footer.copyright': '© 2026 nstdev0. All rights reserved.', // Combining custom text with standard rights
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre mí',
        'nav.projects': 'Trabajo',
        'nav.experience': 'Trayectoria',
        'nav.contact': 'Contacto',
        'nav.tech': 'Tecnologías',
        'nav.education': 'Educación',
        'nav.menu': 'Menú',
        'nav.cta': 'Hablemos',

        // Hero
        'hero.badge': 'Disponible para trabajar y colaborar',
        'hero.title.part1': 'Ingeniería de Software',
        'hero.title.part2': 'Escalable y Estética.',
        'hero.subtitle': 'Desarrollador Full-stack enfocado en Arquitectura Limpia, interfaces de alto rendimiento y soluciones backend escalables.',
        'hero.cta': 'Explorar',
        'hero.downloadbtn': "Descargar CV",

        // About
        'about.title': 'Sobre Mí',
        'about.heading': 'Calidad de Código y',
        'about.heading.span': 'Experiencia de Usuario.',
        'about.description': 'Soy un desarrollador de software impulsado por la excelencia técnica. No solo escribo código; diseño sistemas. Ya sea optimizando un frontend en React para velocidad o estructurando un backend en Node.js con Arquitectura Hexagonal, mi objetivo es siempre el mismo: robustez, escalabilidad y mantenibilidad.',
        'about.stats.years': 'Años Programando',
        'about.stats.repos': 'Repositorios',
        'about.stats.typeSafe': 'Type-Safe',
        'about.skills.server': 'Servidor y Arquitectura',
        'about.skills.interface': 'Interfaz e Interactividad',
        'about.skills.data': 'Bases de Datos',
        'about.skills.tools': 'CI/CD y Herramientas',

        // Projects
        'projects.subtitle': 'Proyectos',
        'projects.title': 'Los más',
        'projects.title.span': 'Relevantes',
        'projects.playDemo': 'Ver Demo',
        'projects.visitSite': 'Visitar sitio',

        // Experience
        'experience.title': 'Experiencia',
        'experience.title.span': 'Profesional',

        // Education
        'education.title': 'Educación',
        'education.title.span': 'Académica',

        // Contact
        'contact.badge': '¿Tienes una idea?',
        'contact.title': '¿Listo para construir',
        'contact.title.span': 'soluciones escalables?',
        'contact.subtitle': 'Actualmente disponible para roles Full-Stack y colaboraciones técnicas.',
        'contact.form.email': 'Tu Email',
        'contact.form.message': 'Tu Mensaje',
        'contact.form.placeholder.email': 'hola@ejemplo.com',
        'contact.form.placeholder.message': 'Cuéntame sobre tu proyecto...',
        'contact.form.submit': 'Enviar mensaje',
        'contact.form.sending': 'Enviando...',
        'contact.form.success': '¡Mensaje recibido! Te responderé pronto.',
        'contact.form.error': 'Hubo un error. Intenta de nuevo.',

        // Footer
        'footer.title': 'Construyamos Soluciones Escalables.',
        'footer.subtitle': 'Construido con Astro.',
        'footer.repo': 'Ver Código Fuente',
        'footer.status': 'En línea',
        'footer.copyright': '© 2026 nstdev0. Todos los derechos reservados.',
    },
} as const;
