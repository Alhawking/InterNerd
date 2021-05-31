const links = document.querySelectorAll('.cuenta .btn');
const form = document.querySelector('.form');
links.forEach(link => link.addEventListener('click', e => {
    window.location.href = link.parentElement.href;
    form.addEventListener('submit', e => e.preventDefault());
}));