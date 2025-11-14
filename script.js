// بيانات المشاريع - محدثة بناءً على معلوماتك
// بيانات المشاريع - محدثة بتاريخ حقيقي
const projectsData = [
    {
        title: "تطبيق إدارة الموارد البشرية (HRMS)",
        date: new Date(2024, 0, 15),
        image: "image/ESS/ESS.jpg",
        description: "نظام متكامل لإدارة شؤون الموظفين في شركة ناشئة ليس لديها نظام سابق.",
        technologies: ["Flutter", "GetX", "PHP", "MySQL", "Firebase"],
        features: [
            "تحضير الحضور والانصراف حسب المواقع فعلياً من التطبيق",
            "إدارة طلبات الإجازات (تمر بسلسلة الاعتمادات)",
            "إدارة طلبات السلف (بتمرير إداري)",
            "نظام لتوزيع وتوكيل المهام لكل موظف مع تتبع التنفيذ",
            "رفع التقارير الإدارية وأرشفة الإجراءات"
        ],
        category: "mobile",
        galleryImages: [
            "image/ESS/ESS.jpg",
            "image/ESS/1_LOGIN.png",
            "image/ESS/2_ADMIN_SYSTEM.jpg",
            "image/ESS/11_USERS_SYSTEM.jpg",
            "image/ESS/12_Attendance.jpg",
            "image/ESS/14_tracker_employee.jpg",
            "image/ESS/19_REPORTs.png",
        ]
    },
    {
        title: "تطبيق متجر إلكتروني متعدد الأطراف",
        date: new Date(2023, 10, 20),
        image: "image/Ecocommerce/ecocommerce.png",
        description: "منصة تجارة إلكترونية متكاملة لإدارة المنتجات والطلبات والعروض.",
        technologies: ["Flutter", "GetX", "PHP", "MySQL", "Firebase"],
        features: [
            "عرض المنتجات والعروض والخصومات وإدارة السلة والطلبات",
            "لوحة تحكم خاصة بإدارة المتجر",
            "تطبيق خاص بسائق التوصيل لإدارة عمليات الشحن والتوصيل",
            "تنبيهات وإشعارات فورية"
        ],
        category: "mobile",
        galleryImages: [
            "image/Ecocommerce/ecocommerce.png",
            "image/Ecocommerce/Main.jpg",
            "image/Ecocommerce/Cart.jpg",
            "image/Ecocommerce/Offers.jpg",
            "image/Ecocommerce/Orders.jpg",
        ]
    },
    {
        title: "نظام إدارة المهام التعليمية المدرسية",
        date: new Date(2023, 8, 10),
        image: "image/School/Schools Managing App Admin.png",
        description: "نظام مدرسي شامل يخدم أربع فئات مختلفة: الطلاب، أولياء الأمور، المدرسون والإدارة.",
        technologies: ["Flutter", "GetX", "PHP", "MySQL", "Firebase"],
        features: [
            "للطلاب: الاطلاع على المناهج، بنك الأسئلة، الواجبات، التقارير",
            "لأولياء الأمور: متابعة الأبناء وتفاعلات المدرسة",
            "للمدرسين: تخطيط الدروس، التحضير، رفع الدرجات",
            "للإدارة: متابعة الأداء، الجداول، الأنشطة"
        ],
        category: "mobile",
        galleryImages: [
            "image/School/Schools Managing App Admin.png",
            "image/School/Schools Managing App Parent.png",
            "image/School/Schools Managing App Student.png",
            "image/School/Schools Managing App Teacher.png"
        ]
    },
    {
        title: "تطبيق دردشة تعليمي",
        date: new Date(2023, 4, 15),
        image: "https://placehold.co/600x400/6c63ff/FFFFFF?text=Chat+App",
        description: "تطبيق دردشة بسيط كتجربة لتطبيق مصادقة المستخدمين وعرض رسائل فورية.",
        technologies: ["Flutter", "GetX", "PHP", "MySQL", "Firebase"],
        features: [
            "تسجيل وإنشاء حساب جديد",
            "مصادقة عبر MySQL/PHP",
            "إدارة الرسائل مع حفظها على Firebase",
            "أول تجربة مع خدمات FCM"
        ],
        category: "mobile",
        galleryImages: [
            "https://placehold.co/600x400/6c63ff/FFFFFF?text=Chat+App",
            "https://placehold.co/600x400/ff64c7/FFFFFF?text=Chat+Screen+1",
            "https://placehold.co/600x400/00d9ff/FFFFFF?text=Chat+Screen+2",
            "https://placehold.co/600x400/564fd8/FFFFFF?text=Chat+Screen+3"
        ]
    }
];
// بيانات المهارات - محدثة بناءً على معلوماتك
const skillsData = {
    frontend: [
        { name: "Dart (Flutter)", level: 95, icon: "fab fa-android" },
        { name: "GetX", level: 90, icon: "fas fa-code" },
        { name: "Firebase", level: 65, icon: "fas fa-fire" }
    ],
    backend: [
        { name: "PHP", level: 75, icon: "fab fa-php" },
        { name: "MySQL", level: 75, icon: "fas fa-database" }
    ],
    tools: [
        { name: "Git", level: 70, icon: "fab fa-git-alt" },
        { name: "VSCode", level: 85, icon: "fas fa-code" },
        { name: "VS.NET", level: 70, icon: "fas fa-laptop-code" }
    ]
};

// بيانات المعلومات الشخصية
const personalInfo = {
    name: "أسامة فواز سعيد قائد العليمي",
    age: "23 سنة",
    nationality: "يمني",
    address: "صنعاء - اليمن",
    email: "osama.alalimi.dev@gmail.com",
    phone: "00967 776838007",
    objective: "مطور تطبيقات Flutter في بداية المسار المهني، لدي خبرة واقعية في بناء تطبيقات متكاملة للهاتف بتقنيات حديثة. أتمتع بطاقة تعلم ذاتية عالية وشغف بإنجاز الأعمال البرمجية المتنوعة مع القدرة على العمل في بيئات متعددة والتعامل مع ضغط العمل. أبحث عن فرصة لمواصلة تطوير مهاراتي التقنية والمساهمة في حلول تكنولوجية فعلية."
};



// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة السنة الحالية في الفوتر
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // تحميل المعلومات الشخصية
    loadPersonalInfo();
    
    // تحميل المهارات (سيقوم loadSkills باستدعاء initSkillBars تلقائياً)
    loadSkills();
    
    // تهيئة تأثير الكتابة
    initTypingEffect();
    
    // تحميل المشاريع
    loadProjects('all');
    
    // تهيئة نظام التصفية للمشاريع
    initProjectFilter();
    
    // تهيئة نظام التبويب للمهارات
    initSkillsTabs();
    
    // تهيئة تغيير السمة
    initThemeToggle();
    
    // تهيئة شاشة التحميل
    initLoader();
    
    // تهيئة القائمة على الأجهزة المحمولة
    initMobileMenu();
    
    // تهيئة تأثير التمرير على شريط التنقل
    initNavbarScroll();
    
    // تهيئة العدادات
    initCounters();
    
    // تهيئة نموذج الاتصال
    initContactForm();
    
    // تهيئة نظام التنقل بين الأقسام
    initSectionNavigation();
});

// تحميل المعلومات الشخصية
function loadPersonalInfo() {
    document.querySelector('.hero-title').textContent = personalInfo.name;
    document.querySelector('.info-value[data-field="name"]').textContent = personalInfo.name;
    document.querySelector('.info-value[data-field="age"]').textContent = personalInfo.age;
    document.querySelector('.info-value[data-field="nationality"]').textContent = personalInfo.nationality;
    document.querySelector('.info-value[data-field="address"]').textContent = personalInfo.address;
    document.querySelector('.info-value[data-field="email"]').textContent = personalInfo.email;
    document.querySelector('.info-value[data-field="phone"]').textContent = personalInfo.phone;
    document.querySelector('.about-description').textContent = personalInfo.objective;
    
    // تحديث رابط البريد الإلكتروني
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${personalInfo.email}`;
        link.textContent = personalInfo.email;
    });
    
    // تحديث رابط الهاتف
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${personalInfo.phone}`;
        link.textContent = personalInfo.phone;
    });
}

// تحميل المهارات
function loadSkills() {
    const frontendContainer = document.querySelector('#frontend .skills-grid');
    const backendContainer = document.querySelector('#backend .skills-grid');
    const toolsContainer = document.querySelector('#tools .skills-grid');
    
    // مسح المحتوى الحالي أولاً
    if (frontendContainer) frontendContainer.innerHTML = '';
    if (backendContainer) backendContainer.innerHTML = '';
    if (toolsContainer) toolsContainer.innerHTML = '';
    
    // تحميل مهارات الواجهة الأمامية
    skillsData.frontend.forEach(skill => {
        const skillCard = createSkillCard(skill);
        if (frontendContainer) frontendContainer.appendChild(skillCard);
    });
    
    // تحميل مهارات الخلفية
    skillsData.backend.forEach(skill => {
        const skillCard = createSkillCard(skill);
        if (backendContainer) backendContainer.appendChild(skillCard);
    });
    
    // تحميل أدوات التطوير
    skillsData.tools.forEach(skill => {
        const skillCard = createSkillCard(skill);
        if (toolsContainer) toolsContainer.appendChild(skillCard);
    });
    
    // بعد تحميل المهارات، قم بتهيئة أشرطة التقدم
    setTimeout(initSkillBars, 100);
}

// إنشاء بطاقة مهارة
function createSkillCard(skill) {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card';
    skillCard.innerHTML = `
        <div class="skill-header">
            <div class="skill-icon">
                <i class="${skill.icon}"></i>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
        </div>
        <div class="skill-level">
            <div class="level-bar">
                <div class="level-progress" data-level="${skill.level}"></div>
            </div>
            <span class="level-percentage">${skill.level}%</span>
        </div>
    `;
    return skillCard;
}
// تأثير الكتابة في قسم الهيرو
// تأثير الكتابة في قسم الهيرو
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;
    
    const texts = ["مطور Flutter", "مطور تطبيقات", "مطور ويب"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
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
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

// بقية الدوال تبقى كما هي مع التعديلات البسيطة...
// [يتبع باقي الكود كما هو مع تعديلات طفيفة]

// تهيئة أشرطة التقدم للمهارات
function initSkillBars() {
    const skillBars = document.querySelectorAll('.level-progress');
    
    // إعادة تعيين جميع الأشرطة إلى 0% أولاً
    skillBars.forEach(bar => {
        bar.style.width = '0%';
    });
    
    // إنشاء Intersection Observer لتحريك أشرطة التقدم عندما تكون مرئية
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const level = entry.target.getAttribute('data-level');
                
                // تحريك الشريط إلى النسبة المطلوبة بعد تأخير بسيط
                setTimeout(() => {
                    entry.target.style.width = level + '%';
                }, 300);
                
                // التوقف عن مراقبة هذا العنصر بعد تحريكه
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.5, // عندما يكون 50% من العنصر مرئياً
        rootMargin: '0px 0px -100px 0px' // يبدأ التحريك عندما يكون العنصر على بعد 100px من الأسفل
    });
    
    // بدء مراقبة جميع أشرطة المهارات
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}


// دالة لحساب المدة منذ تاريخ الإنجاز
function calculateTimeSince(date) {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "تم إنجازه اليوم";
    if (diffDays === 1) return "تم إنجازه منذ يوم";
    if (diffDays < 7) return `تم إنجازه منذ ${diffDays} أيام`;
    
    const diffWeeks = Math.floor(diffDays / 7);
    if (diffWeeks === 1) return "تم إنجازه منذ أسبوع";
    if (diffWeeks < 4) return `تم إنجازه منذ ${diffWeeks} أسابيع`;
    
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "تم إنجازه منذ شهر";
    if (diffMonths < 12) return `تم إنجازه منذ ${diffMonths} أشهر`;
    
    const diffYears = Math.floor(diffDays / 365);
    if (diffYears === 1) return "تم إنجازه منذ عام";
    return `تم إنجازه منذ ${diffYears} أعوام`;
}

// تحميل المشاريع في الشبكة
function loadProjects(filter) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filter === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === filter);
    
    filteredProjects.forEach(project => {
        const timeText = calculateTimeSince(project.date);
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card clickable';
        projectCard.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-date">${timeText}</span>
            </div>
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" />
            </div>
            <div class="project-content">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-features">
                    <h4>المميزات الأساسية:</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// تهيئة نظام التصفية للمشاريع
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // إضافة النشاط للزر المحدد
            this.classList.add('active');
            
            // تحميل المشاريع المصفاة
            const filter = this.getAttribute('data-filter');
            loadProjects(filter);
        });
    });
}

// تهيئة نظام التبويب للمهارات
function initSkillsTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // إزالة النشاط من جميع الأزرار والمحتويات
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // إضافة النشاط للزر والمحتوى المحددين
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// تهيئة تغيير السمة (فاتح/داكن)
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const themeIcon = themeToggle.querySelector('i');
    
    // التحقق من السمة المحفوظة
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'fas fa-moon';
        } else {
            themeIcon.className = 'fas fa-sun';
        }
    }
}

// تهيئة شاشة التحميل
function initLoader() {
    const loader = document.querySelector('.loader');
    if (!loader) return;
    
    // إخفاء شاشة التحميل بعد تحميل الصفحة
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('loaded');
        }, 1000);
    });
}

// تهيئة القائمة على الأجهزة المحمولة
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // إغلاق القائمة عند النقر على رابط
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// تهيئة تأثير التمرير على شريط التنقل
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// تهيئة العدادات
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (!counters.length) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-count');
                const count = +entry.target.textContent;
                const increment = target / 100;
                
                if (count < target) {
                    entry.target.textContent = Math.ceil(count + increment);
                    setTimeout(() => {
                        observer.observe(entry.target);
                    }, 20);
                } else {
                    entry.target.textContent = target;
                }
            }
        });
    }, { threshold: 0.1 });
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// تهيئة نموذج الاتصال
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
        // لأغراض العرض، سنعرض رسالة نجاح فقط
        
        alert('شكراً على رسالتك! سأتواصل معك قريباً.');
        contactForm.reset();
    });
}


// تهيئة نظام التنقل بين الأقسام
function initSectionNavigation() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    
    // دالة للتنقل إلى قسم معين
    function navigateToSection(sectionId) {
        // إخفاء جميع الأقسام
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // إزالة النشاط من جميع الروابط
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // إظهار القسم المحدد
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // إضافة النشاط للرابط المقابل
            const correspondingLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
            
            // التمرير إلى الأعلى إذا كان القسم هو الرئيسية
            if (sectionId === 'home') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // التمرير إلى القسم
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // طرح ارتفاع ال navbar
                    behavior: 'smooth'
                });
            }
        }
    }
    
    // النقر على روابط التنقل في القائمة
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            navigateToSection(targetSection);
        });
    });
    
    // النقر على أزرار الهيرو
    heroButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // إزالة # من الرابط
            navigateToSection(targetId);
        });
    });
    
    // تحديث الروابط النشطة عند التمرير
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // إضافة offset للكشف المبكر
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // إذا كنا في أعلى الصفحة، اجعل الرئيسية نشطة
        if (window.scrollY < 100) {
            current = 'home';
        }
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    });
    
    // تحديث حالة التنقل عند تحميل الصفحة
    setTimeout(() => {
        if (window.scrollY < 100) {
            const homeLink = document.querySelector('.nav-link[data-section="home"]');
            if (homeLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                homeLink.classList.add('active');
            }
        }
    }, 100);
}

// نظام معرض الصور
let currentProjectIndex = 0;
let currentImageIndex = 0;

function initProjectGallery() {
    const projectCards = document.querySelectorAll('.project-card');
    const gallery = document.getElementById('projectGallery');
    const closeBtn = document.querySelector('.gallery-close');
    const overlay = document.querySelector('.gallery-overlay');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const prevSideBtn = document.getElementById('prevSideBtn');
    const nextSideBtn = document.getElementById('nextSideBtn');

    // فتح المعرض عند النقر على بطاقة مشروع
    projectCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            openGallery(index);
        });
    });

    // إغلاق المعرض
    closeBtn.addEventListener('click', closeGallery);
    overlay.addEventListener('click', closeGallery);

    // التنقل بين الصور (جميع الأزرار)
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    prevSideBtn.addEventListener('click', showPrevImage);
    nextSideBtn.addEventListener('click', showNextImage);

    // إغلاق بالزر Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });
}

function updateGalleryImages() {
    const project = projectsData[currentProjectIndex];
    const mainImg = document.getElementById('galleryMainImg');
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    const imageCounter = document.querySelector('.image-counter');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const prevSideBtn = document.getElementById('prevSideBtn');
    const nextSideBtn = document.getElementById('nextSideBtn');
    
    // تحديث الصورة الرئيسية
    mainImg.src = project.galleryImages[currentImageIndex];
    mainImg.alt = project.title;
    
    // تحديث العداد
    imageCounter.textContent = `${currentImageIndex + 1} / ${project.galleryImages.length}`;
    
    // تحديث حالة جميع أزرار التنقل
    const isFirstImage = currentImageIndex === 0;
    const isLastImage = currentImageIndex === project.galleryImages.length - 1;
    
    [prevBtn, prevSideBtn].forEach(btn => {
        btn.disabled = isFirstImage;
    });
    
    [nextBtn, nextSideBtn].forEach(btn => {
        btn.disabled = isLastImage;
    });
    
    // تحديث الصور المصغرة
    thumbnailsContainer.innerHTML = '';
    project.galleryImages.forEach((img, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${img}" alt="${project.title} - صورة ${index + 1}" loading="lazy">`;
        
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updateGalleryImages();
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function openGallery(projectIndex) {
    const gallery = document.getElementById('projectGallery');
    const project = projectsData[projectIndex];
    
    if (!project.galleryImages || project.galleryImages.length === 0) return;
    
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;
    
    // تحديث عنوان المعرض
    document.querySelector('.gallery-title').textContent = project.title;
    
    // عرض الصور
    updateGalleryImages();
    
    // إظهار المعرض
    gallery.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // إضافة تأثير ظهور
    setTimeout(() => {
        gallery.style.opacity = '1';
    }, 10);
}

function closeGallery() {
    const gallery = document.getElementById('projectGallery');
    gallery.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateGalleryImages() {
    const project = projectsData[currentProjectIndex];
    const mainImg = document.getElementById('galleryMainImg');
    const thumbnailsContainer = document.querySelector('.gallery-thumbnails');
    const imageCounter = document.querySelector('.image-counter');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // تحديث الصورة الرئيسية
    mainImg.src = project.galleryImages[currentImageIndex];
    mainImg.alt = project.title;
    
    // تحديث العداد
    imageCounter.textContent = `${currentImageIndex + 1} / ${project.galleryImages.length}`;
    
    // تحديث أزرار التنقل
    prevBtn.disabled = currentImageIndex === 0;
    nextBtn.disabled = currentImageIndex === project.galleryImages.length - 1;
    
    // تحديث الصور المصغرة
    thumbnailsContainer.innerHTML = '';
    project.galleryImages.forEach((img, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${img}" alt="${project.title} - صورة ${index + 1}">`;
        
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updateGalleryImages();
        });
        
        thumbnailsContainer.appendChild(thumbnail);
    });
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateGalleryImages();
    }
}

function showNextImage() {
    const project = projectsData[currentProjectIndex];
    if (currentImageIndex < project.galleryImages.length - 1) {
        currentImageIndex++;
        updateGalleryImages();
    }
}

// لا تنس إضافة استدعاء الدالة في DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... الكود الحالي
    initProjectGallery(); // أضف هذا السطر
});