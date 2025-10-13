 document.addEventListener('DOMContentLoaded', function() {
            const darkModeToggle = document.getElementById('darkModeToggle');
            const sunIcon = darkModeToggle.querySelector('.sun');
            const moonIcon = darkModeToggle.querySelector('.moon');
            const body = document.body;

            // بررسی وضعیت ذخیره شده در localStorage
            const isDarkMode = localStorage.getItem('darkMode') === 'true';
            
            // اعمال وضعیت ذخیره شده
            if (isDarkMode) {
                enableDarkMode();
            } else {
                enableLightMode();
            }

            // رویداد کلیک برای آیکون خورشید (تم روشن)
            sunIcon.addEventListener('click', function() {
                enableLightMode();
                localStorage.setItem('darkMode', 'false');
            });

            // رویداد کلیک برای آیکون ماه (تم تاریک)
            moonIcon.addEventListener('click', function() {
                enableDarkMode();
                localStorage.setItem('darkMode', 'true');
            });

            // تابع برای فعال کردن تم روشن
            function enableLightMode() {
                darkModeToggle.classList.remove('night');
                darkModeToggle.classList.add('day');
                body.setAttribute('data-theme', 'light');
                // حذف کلاس dark-mode از body
                body.classList.remove('dark-mode');
            }

            // تابع برای فعال کردن تم تاریک
            function enableDarkMode() {
                darkModeToggle.classList.remove('day');
                darkModeToggle.classList.add('night');
                body.setAttribute('data-theme', 'dark');
                // اضافه کردن کلاس dark-mode به body
                body.classList.add('dark-mode');
            }
        });