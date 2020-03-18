document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY;
    const divs = document.querySelectorAll('section.wrapper>div');
    const links = document.querySelectorAll('ul.header-menu a');

    divs.forEach((el) => {
        if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
            links.forEach((a) => {
                a.classList.remove('header-menu-link_active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('header-menu-link_active');
                }
            })
        }
    });
}