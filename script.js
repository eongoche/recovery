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

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    const feedbackItem = document.createElement('div');
    feedbackItem.className = 'feedback-item';
    feedbackItem.innerHTML = `
        <h4>${name}</h4>
        <p>${message}</p>
    `;
    
    document.getElementById('feedbackList').prepend(feedbackItem);
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});