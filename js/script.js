// DOM Elements
const backToTopButton = document.getElementById('backToTop');
const navLinks = document.querySelectorAll('.nav-menu a');
const heroButton = document.querySelector('.hero-button');
const projectFilter = document.getElementById('projectFilter');


// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'BigNum 구현',
        date: '2024.09 ~ 2024.12',
        type: 'Crypto Library',
        description: '암호화 연산에 필요한 큰 수 처리 라이브러리 구현',
        details: [
            '암호화의 기반이 되는 큰 수 처리 라이브러리 구현',
            '실제 BigNum 라이브러리로 RSA 암호화 구현',
            '공개키 암호화를 사용하여 암 복호화 애플리케이션 구현'
        ],
        skills: ['C', 'Python', 'flutter', 'ffi(더블 컴파일)'],
        link: 'https://github.com/your-repo',
        isMain: true
    },
    {
        id: 2,
        title: 'BigNum 구현',
        date: '2024.09 ~ 2024.12',
        type: 'Crypto Library',
        description: '암호화 연산에 필요한 큰 수 처리 라이브러리 구현',
        details: [
            '암호화의 기반이 되는 큰 수 처리 라이브러리 구현',
            '실제 BigNum 라이브러리로 RSA 암호화 구현',
            '공개키 암호화를 사용하여 암 복호화 애플리케이션 구현'
        ],
        skills: ['C', 'Python', 'flutter', 'ffi(더블 컴파일)'],
        link: 'https://github.com/your-repo',
        isMain: true
    },
    {
        id: 3,
        title: 'BigNum 구현',
        date: '2024.09 ~ 2024.12',
        type: 'Crypto Library',
        description: '암호화 연산에 필요한 큰 수 처리 라이브러리 구현',
        details: [
            '암호화의 기반이 되는 큰 수 처리 라이브러리 구현',
            '실제 BigNum 라이브러리로 RSA 암호화 구현',
            '공개키 암호화를 사용하여 암 복호화 애플리케이션 구현'
        ],
        skills: ['C', 'Python', 'flutter', 'ffi(더블 컴파일)'],
        link: 'https://github.com/your-repo',
        isMain: false
    }
    // 추가 프로젝트 데이터...
];

// Projects Rendering
function renderProjects(showMainOnly = false) {
    const projectsContainer = document.querySelector('.projects-grid');
    projectsContainer.innerHTML = '';
    
    const filteredProjects = showMainOnly ? 
        projectsData.filter(project => project.isMain) : 
        projectsData;
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = `project-card ${project.isMain ? 'main-project' : ''}`;
        projectCard.style.opacity = '0';
        projectCard.style.transform = 'translateY(20px)';
        
        projectCard.innerHTML = `
            <span class="project-type ${project.isMain ? 'main-project' : 'sub-project'}">${project.type}</span>
            <p class="project-date">${project.date}</p>
            <h3 class="project-title">${project.title}</h3>
            <ul class="project-details">
                ${project.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
            <div class="tech-stack">
                ${project.skills.map(skill => `<span class="tech-tag">${skill}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" class="project-link">
                    <span>바로가기</span>
                    <span>→</span>
                </a>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
        
        // Fade in animation
        requestAnimationFrame(() => {
            projectCard.style.transition = 'all 0.5s ease';
            projectCard.style.opacity = '1';
            projectCard.style.transform = 'translateY(0)';
        });
    });
}

// Smooth Scroll Function
function smoothScrollTo(targetPosition, duration = 1000) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function
        const easeProgress = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        window.scrollTo(0, startPosition + (distance * easeProgress));
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Initial projects render
    renderProjects(projectFilter.checked);
    
    // Project filter
    projectFilter.addEventListener('change', (e) => {
        renderProjects(e.target.checked);
    });

    // Navigation smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const targetPosition = targetElement.offsetTop - 70;
            smoothScrollTo(targetPosition);
        });
    });
    
    // Hero button scroll
    if (heroButton) {
        heroButton.addEventListener('click', (e) => {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            smoothScrollTo(aboutSection.offsetTop - 70);
        });
    }
    
    // Back to top button
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => smoothScrollTo(0, 800));
        
        // Show/hide back to top button
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 20) {
                backToTopButton.style.opacity = '1';
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.opacity = '0';
                setTimeout(() => {
                    if (backToTopButton.style.opacity === '0') {
                        backToTopButton.style.display = 'none';
                    }
                }, 300);
            }
        });
    }

    // Active section highlighting
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
});

// Memories Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const memoryCards = document.querySelectorAll('.memory-card');

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            memoryCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Initialize Masonry layout for memories grid
    const memoriesGrid = document.querySelector('.memories-grid');
    let masonry = null;

    // Function to initialize or reload masonry
    function initMasonry() {
        if (masonry) {
            masonry.destroy();
        }

        masonry = new Masonry(memoriesGrid, {
            itemSelector: '.memory-card',
            columnWidth: '.memory-card',
            percentPosition: true,
            transitionDuration: '0.3s'
        });
    }

    // Initialize masonry after images are loaded
    window.addEventListener('load', initMasonry);

    // Reload masonry after filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(initMasonry, 310);
        });
    });

    // Award cards hover effect
    const awardCards = document.querySelectorAll('.award-card');
    awardCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});