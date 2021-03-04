document.querySelectorAll('.chapter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        button.classList.toggle('chapter-btn--active');

        if(button.classList.contains('chapter-btn--active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
        else {
            content.style.maxHeight = 0;
        }
    });
});