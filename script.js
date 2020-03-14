(function toggleActiveClass() {
    const menu = document.getElementById('menu');  
        menu.addEventListener('click', (event) => {
            menu.querySelectorAll('a').forEach((item) => item.classList.remove('active'));
            event.target.classList.add('active');
        });
})();