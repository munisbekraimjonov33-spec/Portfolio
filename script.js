// ========== skills.json MA'LUMOTLARI (Script ichida foydalanish uchun kiritildi) ==========
const SKILLS_JSON_DATA = {
    "ui_texts": {
        "uz": {
            "page_title": "Munisbek Raimjonov | Frontend Dasturchi",
            "nav_home": "Asosiy",
            "nav_about": "Men haqimda",
            "nav_skills": "Ko'nikmalar",
            "nav_projects": "Loyihalar",
            "nav_contact": "Aloqa",
            "theme_toggle_title": "Yorug'/Qorong'i rejimni almashtirish",
            "lang_selector_title": "Tilni tanlash",
            "hero_typing_text": "Salom, men <span class='highlight'>Munisbek Raimjonov</span><br><span class='role'>Frontend Dasturchi</span>.",
            "btn_contact": "Bog'lanish",
            "btn_projects": "Loyihalarim",
            "btn_more_info": "Ko'proq ma'lumot",
            "btn_view_project": "Ko'rish",
            "btn_send_message": "Xabar yuborish",
            "stat_projects": "Bajarilgan Loyihalar",
            "stat_experience": "Yillik Tajriba",
            "stat_satisfaction": "Mijozlar Mamnunligi",
            "title_about": "Men haqimda",
            "title_skills": "Ko'nikmalar",
            "title_projects": "Loyihalar",
            "title_contact": "Aloqa",
            "skill_group_frontend_title": "Frontend (Interfeys)",
            "skill_group_tools_title": "Asboblar & Boshqalar",
            "skill_html_css": "HTML5 & CSS3",
            "skill_js": "JavaScript (ES6+)",
            "skill_react": "React.js",
            "skill_responsive": "Responsive Design",
            "skill_bootstrap": "Bootstrap",
            "skill_sass": "Sass/Less",
            "skill_git": "Git & GitHub",
            "skill_figma": "Figma",
            "skill_performance": "Web Performance",
            "skill_vscode": "VS Code",
            "project1_title": "E-commerce Platform",
            "project1_desc": "To'liq funksional onlayn do'kon sayti",
            "project2_title": "Portfolio Website",
            "project2_desc": "Shaxsiy portfolio sayti",
            "contact_phone_text": "Telefon",
            "contact_email_text": "Email",
            "contact_location_text": "Manzil",
            "contact_location": "Toshkent, O'zbekiston",
            "contact_form_title": "Xabar qoldiring",
            "contact_name": "Ismingiz",
            "contact_email": "Email",
            "contact_message": "Xabaringiz",
            "chat_title": "AI Yordamchi",
            "chat_welcome": "Salom! Men sizning AI yordamchingizman. Sizga qanday yordam bera olaman?",
            "chat_placeholder": "Xabaringizni kiriting...",
            "footer_slogan": "Zamonaviy va samarali veb yechimlar",
            "footer_text": "Saytlar arzon va hamyonbop narxlarda"
        },
        "ru": {
            "page_title": "Мунисбек Раимжонов | Фронтенд Разработчик",
            "nav_home": "Главная",
            "nav_about": "Обо мне",
            "nav_skills": "Навыки",
            "nav_projects": "Проекты",
            "nav_contact": "Контакты",
            "theme_toggle_title": "Переключить светлый/темный режим",
            "lang_selector_title": "Выбор языка",
            "hero_typing_text": "Привет, я <span class='highlight'>Мунисбек Раимжонов</span><br><span class='role'>Фронтенд Разработчик</span>.",
            "btn_contact": "Связаться",
            "btn_projects": "Мои проекты",
            "btn_more_info": "Подробнее",
            "btn_view_project": "Посмотреть",
            "btn_send_message": "Отправить",
            "stat_projects": "Выполненные Проекты",
            "stat_experience": "Опыт",
            "stat_satisfaction": "Удовлетворенность Клиентов",
            "title_about": "Обо мне",
            "title_skills": "Навыки",
            "title_projects": "Проекты",
            "title_contact": "Контакты",
            "skill_group_frontend_title": "Фронтенд (Интерфейс)",
            "skill_group_tools_title": "Инструменты & Прочее",
            "skill_html_css": "HTML5 & CSS3",
            "skill_js": "JavaScript (ES6+)",
            "skill_react": "React.js",
            "skill_responsive": "Адаптивный Дизайн",
            "skill_bootstrap": "Bootstrap",
            "skill_sass": "Sass/Less",
            "skill_git": "Git & GitHub",
            "skill_figma": "Figma",
            "skill_performance": "Web Производительность",
            "skill_vscode": "VS Code",
            "project1_title": "Платформа E-commerce",
            "project1_desc": "Полнофункциональный сайт интернет-магазина",
            "project2_title": "Сайт-Портфолио",
            "project2_desc": "Личный сайт-портфолио",
            "contact_phone_text": "Телефон",
            "contact_email_text": "Email",
            "contact_location_text": "Адрес",
            "contact_location": "Ташкент, Узбекистан",
            "contact_form_title": "Оставить сообщение",
            "contact_name": "Ваше имя",
            "contact_email": "Email",
            "contact_message": "Ваше сообщение",
            "chat_title": "AI Ассистент",
            "chat_welcome": "Здравствуйте! Я AI ассистент. Чем я могу вам помочь?",
            "chat_placeholder": "Введите свой вопрос...",
            "footer_slogan": "Современные и эффективные веб-решения",
            "footer_text": "Сайты по низким и доступным ценам"
        },
        "en": {
            "page_title": "Munisbek Raimjonov | Frontend Developer",
            "nav_home": "Home",
            "nav_about": "About",
            "nav_skills": "Skills",
            "nav_projects": "Projects",
            "nav_contact": "Contact",
            "theme_toggle_title": "Toggle light/dark mode",
            "lang_selector_title": "Language selection",
            "hero_typing_text": "Hi, I'm <span class='highlight'>Munisbek Raimjonov</span><br><span class='role'>A Frontend Developer</span>.",
            "btn_contact": "Get in touch",
            "btn_projects": "My Projects",
            "btn_more_info": "More Info",
            "btn_view_project": "View Project",
            "btn_send_message": "Send Message",
            "stat_projects": "Projects Completed",
            "stat_experience": "Years of Experience",
            "stat_satisfaction": "Client Satisfaction",
            "title_about": "About Me",
            "title_skills": "Skills",
            "title_projects": "Projects",
            "title_contact": "Contact",
            "skill_group_frontend_title": "Frontend (Interface)",
            "skill_group_tools_title": "Tools & Others",
            "skill_html_css": "HTML5 & CSS3",
            "skill_js": "JavaScript (ES6+)",
            "skill_react": "React.js",
            "skill_responsive": "Responsive Design",
            "skill_bootstrap": "Bootstrap",
            "skill_sass": "Sass/Less",
            "skill_git": "Git & GitHub",
            "skill_figma": "Figma",
            "skill_performance": "Web Performance",
            "skill_vscode": "VS Code",
            "project1_title": "E-commerce Platform",
            "project1_desc": "Fully functional online store website",
            "project2_title": "Portfolio Website",
            "project2_desc": "Personal portfolio website",
            "contact_phone_text": "Phone",
            "contact_email_text": "Email",
            "contact_location_text": "Location",
            "contact_location": "Tashkent, Uzbekistan",
            "contact_form_title": "Leave a message",
            "contact_name": "Your Name",
            "contact_email": "Email",
            "contact_message": "Your Message",
            "chat_title": "AI Assistant",
            "chat_welcome": "Hello! I am your AI assistant. How can I help you?",
            "chat_placeholder": "Type your question...",
            "footer_slogan": "Modern and effective web solutions",
            "footer_text": "Websites at affordable and accessible prices"
        }
    },
    "about_data": {
        "uz": {
            "title": "Men haqimda",
            "summary": "Men <strong>1 yillik tajribaga</strong> ega, dinamik va yuqori ishlashga ega veb-saytlarni yaratishga ixtisoslashgan <strong>Frontend Dasturchiman</strong>.",
            "features": [
                { "id": "team_work", "icon": "fas fa-handshake", "title": "Jamoaviy Ish", "description": "Dizaynerlar va backend bilan samarali hamkorlik." },
                { "id": "time_management", "icon": "fas fa-clock", "title": "Vaqt Boshqaruvi", "description": "Muddatlarga qat'iy rioya qilish va rejalashtirish." },
                { "id": "detail_focus", "icon": "fas fa-search-plus", "title": "Detailga E'tibor", "description": "Dizayndagi eng mayda detallarni aniq ijro etish." },
                { "id": "problem_solving", "icon": "fas fa-lightbulb", "title": "Muammolarni Yechish", "description": "Murakkab qiyinchiliklarga innovatsion yechimlar." },
                { "id": "constant_learning", "icon": "fas fa-graduation-cap", "title": "Doimiy O'rganish", "description": "Yangi texnologiyalarni o'rganishga yuqori ishtiyoq." },
                { "id": "ux_priority", "icon": "fas fa-user-check", "title": "UX Ustuvorligi", "description": "Foydalanuvchi tajribasini birinchi o'ringa qo'yish." },
                { "id": "code_quality", "icon": "fas fa-code-branch", "title": "Kod Sifati", "description": "Toza, o'qiladigan va qayta ishlatiladigan (reusable) kod." },
                { "id": "testing_debugging", "icon": "fas fa-bug", "title": "Testing & Debugging", "description": "Tizimli sinash va xatolarni tezda bartaraf etish." },
                { "id": "adaptability", "icon": "fas fa-mobile-alt", "title": "Moslashuvchanlik", "description": "Barcha ekranlarda mukammal ishlashni ta'minlash." },
                { "id": "performance_optimization", "icon": "fas fa-tachometer-alt", "title": "Ishlashni Optimizatsiyasi", "description": "Yuqori yuklanish tezligiga erishish (Performance)." },
                { "id": "self_management", "icon": "fas fa-user-tie", "title": "O'z-o'zini boshqarish", "description": "Topshiriqlarni mustaqil va samarali boshqarish." },
                { "id": "version_control", "icon": "fas fa-code-commit", "title": "Versiya Boshqaruvi", "description": "Git va GitHub/GitLab yordamida kodni boshqarish." },
                { "id": "effective_communication", "icon": "fas fa-comments", "title": "Samarali Aloqa", "description": "G'oyalarni aniq va tushunarli yetkazish qobiliyati." },
                { "id": "project_analysis", "icon": "fas fa-chart-line", "title": "Loyiha Tahlili", "description": "Talablarni texnik yechimlarga aylantirish." },
                { "id": "cross_browser", "icon": "fab fa-chrome", "title": "Kross-Brauzer Moslik", "description": "Barcha asosiy brauzerlarda bir xil ishlash." },
                { "id": "design_principles", "icon": "fas fa-palette", "title": "Dizayn Prinsiplari", "description": "UI/UX dizayn prinsiplarini amalda qo'llash." },
                { "id": "api_integration", "icon": "fas fa-server", "title": "API Integratsiyasi", "description": "RESTful API va ma'lumotlar bilan ishlash tajribasi." },
                { "id": "accessibility", "icon": "fas fa-universal-access", "title": "Veb Erkinligi (A11y)", "description": "Barcha foydalanuvchilar uchun qulaylikni ta'minlash." },
                { "id": "security", "icon": "fas fa-shield-alt", "title": "Xavfsizlik Tushunchasi", "description": "Frontend darajasidagi asosiy xavfsizlik amaliyotlari." },
                { "id": "animation", "icon": "fas fa-laptop-code", "title": "Animatsiya & Interaktivlik", "description": "Samarali CSS va JS animatsiyalarini yaratish." },
                { "id": "component_approach", "icon": "fas fa-sitemap", "title": "Komponentli Yondashuv", "description": "Katta loyihalarda komponent asosida ishlash." },
                { "id": "syntactic_purity", "icon": "fas fa-code", "title": "Sintaktik Tozalik", "description": "Kodni Linting va Formatting vositalari bilan ishlash." },
                { "id": "build_tools", "icon": "fas fa-cogs", "title": "Build Tools (Webpack/Vite)", "description": "Loyihalarni optimallashtirish va to'plash (bundling)." },
                { "id": "i18n", "icon": "fas fa-language", "title": "I18n (Lokalizatsiya)", "description": "Ko'p tilli veb-saytlarni yaratish tajribasi." },
                { "id": "modularity", "icon": "fas fa-cubes", "title": "Modullik Dizayni", "description": "Kodni kichik, bog'liq bo'lmagan modullarga ajratish." },
                { "id": "refactoring", "icon": "fas fa-compress-alt", "title": "Kodni Refaktorlash", "description": "Mavjud kod bazasini yaxshilash va tozalash." }
            ]
        },
    }
};


// ========== PAGE LOADER & TYPING EFFECT ==========

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio sayti yuklanmoqda...');
    
    // 1. LOADING SCREEN YARATISH
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Portfolio</div>
            <div class="typing-text-container">
                <span id="typing-text"></span>
                <span class="typing-cursor">|</span>
            </div>
            <div class="loader-progress">
                <div class="progress-bar">
                    <div class="progress-fill"></div>
                </div>
                <div class="progress-text">0%</div>
            </div>
        </div>
    `;
    
    // Loading screen CSS
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-color);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
            max-width: 600px;
            padding: 20px;
        }
        
        .loader-logo {
            font-size: 4rem;
            font-weight: 800;
            color: var(--primary-color);
            margin-bottom: 40px;
            animation: fadeIn 0.8s ease;
        }
        
        .typing-text-container {
            font-size: 2rem;
            min-height: 100px;
            margin-bottom: 40px;
            text-align: center;
        }
        
        #typing-text {
            color: var(--text-color);
            font-weight: 600;
        }
        
        .loader-progress {
            margin-top: 40px;
        }
        
        .progress-bar {
            width: 300px;
            height: 4px;
            background: var(--border-color);
            border-radius: 2px;
            overflow: hidden;
            margin: 0 auto 10px;
        }
        
        .progress-fill {
            height: 100%;
            background: var(--primary-color);
            width: 0%;
            transition: width 0.3s ease;
            border-radius: 2px;
        }
        
        .progress-text {
            color: var(--text-muted);
            font-size: 0.9rem;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Loading screen ichidagi kursor */
        .typing-cursor { 
            display: inline-block; 
            margin-left: 5px; 
            color: var(--primary-color); 
            font-weight: 300; 
            animation: blink 0.7s infinite; 
        }

        @keyframes blink { 
            0%, 100% { opacity: 1; } 
            50% { opacity: 0; } 
        }

        body.loading {
            overflow: hidden;
        }
        
        body.loaded #loading-screen {
            opacity: 0;
            visibility: hidden;
        }
    `;
    
    document.head.appendChild(loadingStyle);
    document.body.appendChild(loadingScreen);
    document.body.classList.add('loading');
    
    // 2. TYPING EFFECT (Yuklash ekrani uchun)
    const typingText = document.getElementById('typing-text');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    const texts = [
        "Web Dasturchi Portfolio",
        "Zamonaviy Texnologiyalar",
        "Kreativ Echimlar",
        "Professional Tajriba"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        const progress = Math.min(30 + (charIndex / currentText.length * 20), 50);
        updateProgress(progress);
        
        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 1000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(typeEffect, typingSpeed);
    }
    
    // 3. PROGRESS ANIMATION
    function updateProgress(percent) {
        progressFill.style.width = percent + '%';
        progressText.textContent = Math.round(percent) + '%';
    }
    
    // 4. SAYTNI YUKLASH
    function loadWebsite() {
        let progress = 50;
        
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                
                setTimeout(() => {
                    document.body.classList.add('loaded');
                    document.body.classList.remove('loading');
                    
                    setTimeout(() => {
                        loadingScreen.remove();
                        loadingStyle.remove();
                        
                        document.querySelectorAll('.container, section, header, footer').forEach(el => {
                            el.style.opacity = '0';
                            el.style.transform = 'translateY(20px)';
                            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                            
                            setTimeout(() => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            }, 100);
                        });
                        
                        console.log('✅ Sayt to\'liq yuklandi va ko\'rinadi');
                        
                        initializePortfolio();
                    }, 500);
                }, 500);
            }
            updateProgress(progress);
        }, 100);
    }
    
    // 5. TYPING EFFECTNI BOSHLASH VA YUKLASH
    setTimeout(() => {
        typeEffect();
        setTimeout(() => {
            loadWebsite();
        }, 3000);
    }, 500);
});

// ========== ASOSIY PORTFOLIO KODI ==========

function initializePortfolio() {
    console.log('🎯 Portfolio sayti ishga tushdi!');
    
    // ==================== DARK/LIGHT MODE ====================
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    let currentTheme = localStorage.getItem('portfolio-theme');
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        localStorage.setItem('portfolio-theme', currentTheme);
    }
    
    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.className = 'fas fa-sun';
            console.log('🌙 Dark mode yoqildi');
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.className = 'fas fa-moon';
            console.log('☀️ Light mode yoqildi');
        }
        localStorage.setItem('portfolio-theme', theme);
    }
    
    setTheme(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // ==================== SCROLL BEHAVIOR & NAVIGATION ACTIVE STATE ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let scrollPosition = window.scrollY + 100; 
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); 

    // ==================== WEBSITE DATA COLLECTION (AI uchun kontekst) ====================
    const WEBSITE_DATA = {
        hero: {
            name: document.querySelector('.hero-text h1 .highlight')?.textContent || 'Web Dasturchi',
            description: document.querySelector('.summary-text')?.textContent?.trim() || 'Men frontend texnologiyalari bo\'yicha mutaxassis dasturchiman. Zamonaviy web saytlar yaratishga ixtisoslashganman.',
            stats: {
                projects: document.querySelector('.stat-item:nth-child(1) .stat-number')?.textContent || '3 ta',
                experience: document.querySelector('.stat-item:nth-child(2) .stat-number')?.textContent || '1+',
                satisfaction: document.querySelector('.stat-item:nth-child(3) .stat-number')?.textContent || '100%'
            }
        },
        skills: {
            frontend: [], 
            backend: [] 
        },
        projects: [
            {
                title: 'Namoz vaqtlari',
                description: "Namoz va Ramazon vaqtlari"
            }
        ],
        contact: {
            email: 'munisbekraimjonov33@gmail.com', // To'g'rilandi: @ belgisi qo'shildi
            phone: '+998 90 123 45 67',
            location: 'Samarqand, O\'zbekiston'
        }
    };
    
    const skillGroups = document.querySelectorAll('.skill-group');
    skillGroups.forEach(group => {
        const category = group.querySelector('h4')?.textContent?.toLowerCase() || '';
        const skills = Array.from(group.querySelectorAll('.skill-card span'))
                            .map(span => span.textContent?.trim())
                            .filter(Boolean);
        if (category.includes('frontend')) {
            WEBSITE_DATA.skills.frontend = skills;
        } else if (category.includes('backend')) {
            WEBSITE_DATA.skills.backend = skills;
        }
    });

    const aboutSummaryFromJSON = SKILLS_JSON_DATA.about_data.uz.summary.replace(/<[^>]*>/g, '').trim();
    const detailedFeatures = SKILLS_JSON_DATA.about_data.uz.features
        .map(f => `${f.title}: ${f.description}`)
        .join('; ');
    const allSkillsFromJSON = Object.keys(SKILLS_JSON_DATA.ui_texts.uz)
        .filter(key => key.startsWith('skill_'))
        .map(key => SKILLS_JSON_DATA.ui_texts.uz[key])
        .join(', ');


    // ==================== AI CHATBOT (API YASHIRILGAN) ====================
    
    // API kaliti base64 formatida (sk-or-v1-ca15afca9f...)
    const _0x_key = "c2stb3ItdjEtY2ExNWFmY2E5ZmY0NWI0YzhjYTE0NmQ4NDlkYTRxMTMzMjhlN2E0NTZmMDIyY2MzYjY5NDk0ZTkwZWM2NDFjM2Y="; 
    const OPENAI_API_KEY = atob(_0x_key);
    const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
    const MODEL_NAME = "gpt-3.5-turbo";

    const MUNISBEK_CONTEXT = `
        Siz Frontend Dasturchi Munisbek Raimjonovning shaxsiy AI yordamchisiz. 
        Sizning vazifangiz Munisbekning portfoliosi haqida professional javob berish.
        - Ism: Munisbek Raimjonov
        - Tajriba: ${WEBSITE_DATA.hero.stats.experience} yil
        - Loyihalar: Namoz vaqtlari, E-commerce Platform, Portfolio Website
        - Skills: ${allSkillsFromJSON}
        - Kontakt: ${WEBSITE_DATA.contact.email}
    `;

    async function getBotResponse(userMessage) {
        try {
            const messages = [
                { "role": "system", "content": MUNISBEK_CONTEXT },
                { "role": "user", "content": userMessage }
            ];

            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: MODEL_NAME,
                    messages: messages,
                    temperature: 0.7,
                    max_tokens: 300
                })
            });

            if (!response.ok) throw new Error('API Error');

            const data = await response.json();
            return data.choices[0].message.content.trim();

        } catch (error) {
            console.error('AI API Error:', error);
            return "Kechirasiz, hozir javob bera olmayman. Aloqa bo'limi orqali bog'lanishingiz mumkin.";
        }
    }


    // ==================== CHATBOT LOGIC ====================
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatCloseBtn = document.querySelector('.chat-close-btn');
    const chatForm = document.getElementById('chat-form-bot');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    if(chatbotToggle) {
        chatbotToggle.addEventListener('click', () => {
            chatbotWindow.classList.toggle('open');
            chatbotToggle.classList.toggle('open');
        });
    }

    if(chatCloseBtn) {
        chatCloseBtn.addEventListener('click', () => {
            chatbotWindow.classList.remove('open');
            chatbotToggle.classList.remove('open');
        });
    }
    
    function createMessage(message, sender = 'user') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.innerHTML = message;
        messageDiv.appendChild(bubble);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return bubble;
    }

    if(chatForm) {
        chatForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const userMessage = chatInput.value.trim();
            if (!userMessage) return;
            
            createMessage(userMessage, 'user');
            chatInput.value = '';
            const aiTypingBubble = createMessage('<div class="typing-dots"><span></span><span></span><span></span></div>', 'ai');

            const botResponse = await getBotResponse(userMessage);
            aiTypingBubble.innerHTML = botResponse;
        });
    }
    
    // ==================== TOAST NOTIFICATION ====================
    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<span>${message}</span>`;
        toast.style.cssText = `position: fixed; bottom: 20px; right: 20px; background: #333; color: #fff; padding: 10px 20px; border-radius: 5px; z-index: 9999;`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
    
    // ==================== CONTACT FORM ====================
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showToast('Xabar muvaffaqiyatli yuborildi!', 'success');
            this.reset();
        });
    }

    // ==================== HERO SECTION TYPING EFFECT ====================
    const heroDynamicTextSpan = document.getElementById('hero-dynamic-text');
    if (heroDynamicTextSpan) {
        const words = ['Munisbek Raimjonov', 'Frontend Dasturchi', 'Junior Dasturchi'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeHeroEffect() {
            const currentWord = words[wordIndex];
            heroDynamicTextSpan.textContent = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
            charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
            
            let typeSpeed = isDeleting ? 50 : 100;
            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            setTimeout(typeHeroEffect, typeSpeed);
        }
        setTimeout(typeHeroEffect, 1000);
    }
}
