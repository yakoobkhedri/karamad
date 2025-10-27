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

// tab

let checktab = Array.from(document.getElementsByClassName('checktab'));
let checktabcontent = Array.from(document.querySelectorAll('#checktabcontent > div'));

checktab.forEach((tab) => {
    tab.addEventListener('click', function() {
        // حذف کلاس active از همه تب‌ها
        checktab.forEach((t) => {
            t.classList.remove('active');
        });
        
        // اضافه کردن کلاس active به تب کلیک شده
        tab.classList.add('active');
        
        let tabId = tab.dataset.id;
        
        // مدیریت محتوای تب‌ها
        checktabcontent.forEach((content) => {
            let contentId = content.dataset.id;
            if (tabId === contentId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    });
});