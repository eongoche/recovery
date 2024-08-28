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

// Load existing feedback when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadFeedback();
});

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    // Save the feedback
    saveFeedback(name, message);
    
    // Clear form
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});

function saveFeedback(name, message) {
    // Get existing feedback from localStorage
    let feedback = JSON.parse(localStorage.getItem('feedback')) || [];
    
    // Add new feedback
    feedback.push({ name: name, message: message, date: new Date() });
    
    // Save back to localStorage
    localStorage.setItem('feedback', JSON.stringify(feedback));
    
    // Reload the feedback display
    loadFeedback();
}

function loadFeedback() {
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = ''; // Clear existing feedback
    
    // Get feedback from localStorage
    let feedback = JSON.parse(localStorage.getItem('feedback')) || [];
    
    // Display feedback in reverse chronological order
    feedback.reverse().forEach(function(item) {
        const feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        feedbackItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.message}</p>
            <small>${new Date(item.date).toLocaleString()}</small>
        `;
        feedbackList.appendChild(feedbackItem);
    });
}