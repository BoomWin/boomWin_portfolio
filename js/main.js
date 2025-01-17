// 현재 활성화된 메뉴 항목 표시
document.addEventListener('DOMContentLoaded', () => {
    // 현재 URL의 해시값 가져오기
    const currentPath = window.location.hash || '#home';
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    // 모든 메뉴 항목의 active 클래스 제거
    const clearActiveClasses = () => {
        menuItems.forEach(item => item.classList.remove('active'));
    };

    // 현재 페이지에 해당하는 메뉴 항목에 active 클래스 추가
    const setActiveMenu = (path) => {
        clearActiveClasses();
        menuItems.forEach(item => {
            if(item.getAttribute('href') === path) {
                item.classList.add('active');
            }
        });
    };

    // 초기 active 클래스 설정
    setActiveMenu(currentPath);

    // 메뉴 클릭 이벤트 처리
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            clearActiveClasses();
            e.target.classList.add('active');
        });
    });

    // 스크롤 시 사이드바 그림자 효과
    const sidebar = document.querySelector('.sidebar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            sidebar.style.boxShadow = '2px 0 5px rgba(0,0,0,0.1)';
        } else {
            sidebar.style.boxShadow = 'none';
        }
    });
});

