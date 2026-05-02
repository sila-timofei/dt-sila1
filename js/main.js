window.addEventListener('DOMContentLoaded', () => {
    const offLink = document.querySelectorAll('.off-link');

    offLink.forEach(i => {
        i.addEventListener('click', e => {
            e.preventDefault();
        });
    });

    const btnMenu = document.querySelector('.header__btn-menu'),
          btnMenuLine = btnMenu.querySelectorAll('.header__btn-line'),
          mobMenu = document.querySelector('.mob-menu'),
          linkMenu = mobMenu.querySelectorAll('.mob-menu__link'),
          doc = document.querySelector('.document');

    btnMenu.addEventListener('click', () => {
        mobMenu.classList.toggle('mob-menu-open');
        doc.classList.toggle('document-close');
        
        if (mobMenu.classList.contains('mob-menu-open')) {
            btnMenuLine[0].style.cssText = 'top: 50%;transform: translateY(-50%)rotate(45deg);';
            btnMenuLine[1].style.cssText = 'opacity: 0;';
            btnMenuLine[2].style.cssText = 'bottom: 50%;transform: translateY(50%)rotate(-45deg);';

            linkMenu.forEach(i => {
                i.style.cssText = 'margin-left: 0; letter-spacing: 0.5px;';
            });
        } else {
            btnMenuLine[0].style.cssText = '';
            btnMenuLine[1].style.cssText = '';
            btnMenuLine[2].style.cssText = '';

            linkMenu.forEach(i => {
                i.style.cssText = '';
            });
        }
    });
    
});