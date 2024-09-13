const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', function(e) {
    sidebar.classList.toggle('show-sidebar')
})

closeBtn.addEventListener('click', function(e) {
    sidebar.classList.remove('show-sidebar')
})