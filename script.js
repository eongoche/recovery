const navLinkEls =document.querySelectorAll('.nav-link')
const selectionEls =document.querySelectorAll('.section')

let currentSection = 'home';
window.addEventListener('scroll',() =>{
    selectionEls.forEach(sectionEl =>{
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection =sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        if ( navLinkEl.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active')
            navLinkEl.classList.add('active');

        }
    })
});

