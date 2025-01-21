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
        skills: ['C', 'Python', 'flutter', 'ffi', 'Low level memory', 'Network'],
        link: 'https://github.com/Addvan-App-Program-BigNum-using-here/BigNum',
        isMain: true
    },
    {
        id: 2,
        title: '2024 하계 통신 학회 학술대회',
        date: '2024.06.19 발표',
        type: 'Journal',
        description: '5G 특화망 단말용 양자암호모듈 기반 단대단 보안 기법 구현 연구',
        details: [
            '양자엔트로피칩 기반 암호모듈',
            '5G 특화망 단말용 양자암호모듈 연구',
            '암호화 API 동작 테스트 및 성능평가'
        ],
        skills: ['Crypto', 'API', 'Hardware'],
        link: 'https://www.dbpia.co.kr/pdf/pdfView.do?nodeId=NODE11906775&googleIPSandBox=false&mark=0&minRead=5&ipRange=false&b2cLoginYN=false&icstClss=010000&isPDFSizeAllowed=true&accessgl=Y&language=ko_KR&hasTopBanner=true',
        isMain: true
    },
    {
        id: 3,
        title: 'OpenVPN Customization',
        date: '2024.06 ~ 현재 진행 중',
        type: 'SSL-VPN',
        description: 'OpenVPN 소스코드 커스터마이징 및 개발 & SSL/TLS Crypto 교체',
        details: [
            'OpenVPN 소스코드 커스터마이징 및 개발',
            'SSL/TLS Crypto 교체 및 테스트',
            '암호모듈과 연동하여 보안성 강화'
        ],
        skills: ['C', 'Cross compile', 'SSL/TLS', 'JAVA', 'JNI'],
        link: 'https://github.com/BoomWin/openvpn_remote',
        isMain: true
    },
    {
        id: 4,
        title: 'CAVP 테스트 개발',
        date: '2024.11 ~ 2025.01',
        type: 'KCMVP',
        description: 'CAVP 테스트를 라이브러리화하여 개발 (KCMVP)',
        details: [
            'KCMVP 인증 암호 알고리즘을 테스트하기 위한 라이브러리 개발',
            'C언어와 .o, .so 파일을 사용하여 라이브러리화',
            '.req, .sam, .fax, .rsp 파일 생성 알고리즘 구현'
        ],
        skills: ['C', 'KCMVP'],
        link: '비공개',
        isMain: true
    },
    {
        id: 5,
        title: 'RTMP 실시간 영상 전송 테스트 개발',
        date: '2024.06 ~ 2024.09',
        type: 'Protocol',
        description: 'RTMP 프로토콜을 사용하여 실시간 영상 전송 테스트 개발',
        details: [
            'Node.js 구현',
            'Application 구현 (OpenSource 분석 후 Customizing)',
            '송신 측과 수신 측 영상 데이터 송 수신 구현'
        ],
        skills: ['C', 'Java', 'Nodejs', 'Network', 'RTMP'],
        link: 'https://github.com/BoomWin/RtmpPublish-Crypto',
        isMain: false
    },
    {
        id: 6,
        title: '2024 정보보호학회 동계 학술대회',
        date: '2024.10 ~ 2024.11',
        type: 'Journal',
        description: '차세대 Military-BcN 5G 상용망 연동 시 모바일 업무 환경 보안 기법 연구',
        details: [
            '암호모듈 기반 인증 기법 연구',
            '군 입장에서 5G AKA 기반의 인증 시스템에 대한 보안적 위협 분석',
            'c-type crypto module을 사용한 보안성 강화'
        ],
        skills: ['Hardware', 'Crypto', 'SSL/TLS', 'Network', 'Authentication'],
        link: 'https://cisc.or.kr/bestPaper',
        isMain: true
    },
    {
        id: 7,
        title: '2024 CO-SHOW',
        date: '2024.11 ~ 2024.12',
        type: 'Conference',
        description: 'QKD 시스템을 이용한 양자 보안',
        details: [
            'QKD, QKMS, QENC 시스템 적용 연구',
            '효율적인 QKD 기반의 망 보안 시스템 구축',
            '애플리케이션 레벨에서의 효과적인 QKD 적용 방법 연구'
        ],
        skills: ['QKD', 'KT 협업', 'Network', 'Crypto', 'PQC'],
        link: '없음',
        isMain: true
    },
    {
        id: 8,
        title: 'PQC library 개발',
        date: '2025.1 ~ 진행 중',
        type: 'Crypto Library',
        description: 'Kyber, Dilithium, SPHINCS+, Falcon 등 PQC 알고리즘 라이브러리 개발',
        details: [
            '양자 컴퓨터를 대비하여 현재 알고리즘과 pqc 알고리즘 Migraiton',
            'Test 웹 개발 및 테스트',
            '각 NTT, Shufle, Poly 등 연산 알고리즘 구현'
        ],
        skills: ['Crypto', 'PQC', 'html', 'css', 'js', 'Math'],
        link: 'https://github.com/BoomWin/pqc_lib_web',
        isMain: false
    },

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
            <p class="project-description">${project.description}</p>   <!-- 추가된 부분 -->
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