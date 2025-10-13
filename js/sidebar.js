// menu

let openSidebar = document.getElementById('openSidebar');
let sidebar = document.getElementById('sidebar');
let closeSidebar = document.getElementById('closeSidebar');
let overlay = document.getElementById('overlay');

openSidebar.addEventListener('click' , function () {
  sidebar.classList.add('active');
  overlay.classList.add('active');
});
closeSidebar.addEventListener('click' , function () {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click' , function () {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});