const toggle = document.getElementById('toggle');
const buttonLabel = document.querySelector('.button');

toggle.addEventListener('change', function() {
    if (toggle.checked) {
        buttonLabel.textContent = 'Revert State';
    } else {
        buttonLabel.textContent = 'Change State';
    }
});
