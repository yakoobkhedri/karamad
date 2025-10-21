document.addEventListener('DOMContentLoaded', function () {
    // انتخاب تمام باکس‌ها
    const loanBoxes = document.querySelectorAll('.bg-white.rounded-16.border-gray-2');

    loanBoxes.forEach((box, index) => {
        // انتخاب المان‌های داخل هر باکس
        const payTimeItems = box.querySelectorAll('.payTime');
        const payMountItems = box.querySelectorAll('.payMount');
        const payTables = box.querySelectorAll('.payTable');
        const leftBtns = box.querySelectorAll('.leftbtn');
        const rightBtns = box.querySelectorAll('.rightbtn');

        // پیدا کردن آیتم فعال فعلی
        function getActiveIndex(items) {
            for (let i = 0; i < items.length; i++) {
                if (items[i].classList.contains('active')) {
                    return i;
                }
            }
            return 0;
        }

        // تغییر به آیتم بعدی
        function nextItem(items) {
            const currentIndex = getActiveIndex(items);
            items[currentIndex].classList.remove('active');

            const nextIndex = (currentIndex + 1) % items.length;
            items[nextIndex].classList.add('active');

            return nextIndex;
        }

        // تغییر به آیتم قبلی
        function prevItem(items) {
            const currentIndex = getActiveIndex(items);
            items[currentIndex].classList.remove('active');

            const prevIndex = (currentIndex - 1 + items.length) % items.length;
            items[prevIndex].classList.add('active');

            return prevIndex;
        }

        // همگام‌سازی تمام المان‌ها بر اساس data-id
        function syncAllItems(activeIndex) {
            const activeId = (activeIndex + 1).toString(); // چون data-id از 1 شروع می‌شود

            // غیرفعال کردن همه در این باکس
            payTimeItems.forEach(item => item.classList.remove('active'));
            payMountItems.forEach(item => item.classList.remove('active'));
            payTables.forEach(item => item.classList.remove('active'));

            // فعال کردن المان‌های متناظر با data-id در این باکس
            const activePayTime = box.querySelector(`.payTime[data-id="${activeId}"]`);
            const activePayMount = box.querySelector(`.payMount[data-id="${activeId}"]`);
            const activePayTable = box.querySelector(`.payTable[data-id="${activeId}"]`);

            if (activePayTime) activePayTime.classList.add('active');
            if (activePayMount) activePayMount.classList.add('active');
            if (activePayTable) activePayTable.classList.add('active');
        }

        // اضافه کردن event listener برای دکمه‌های سمت چپ (payTime)
        if (leftBtns[0]) {
            leftBtns[0].addEventListener('click', function () {
                const newIndex = prevItem(payTimeItems);
                syncAllItems(newIndex);
            });
        }

        if (rightBtns[0]) {
            rightBtns[0].addEventListener('click', function () {
                const newIndex = nextItem(payTimeItems);
                syncAllItems(newIndex);
            });
        }

        // اضافه کردن event listener برای دکمه‌های سمت راست (payMount)
        if (leftBtns[1]) {
            leftBtns[1].addEventListener('click', function () {
                const newIndex = prevItem(payMountItems);
                syncAllItems(newIndex);
            });
        }

        if (rightBtns[1]) {
            rightBtns[1].addEventListener('click', function () {
                const newIndex = nextItem(payMountItems);
                syncAllItems(newIndex);
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('.radioBtn');

    radioButtons.forEach(button => {
        button.addEventListener('click', function () {
            // حذف کلاس active از همه دکمه‌ها
            radioButtons.forEach(btn => {
                btn.classList.remove('active');
                const input = btn.querySelector('input[type="radio"]');
                input.checked = false;
            });

            // اضافه کردن کلاس active به دکمه کلیک شده
            this.classList.add('active');
            const input = this.querySelector('input[type="radio"]');
            input.checked = true;
        });
    });
});

// login modal

document.addEventListener('DOMContentLoaded', function() {
    // عناصر DOM
    const modalbox = document.getElementById('modalbox');
    const panellogin = document.getElementById('panellogin');
    const wellcome = document.getElementById('wellcome');
    const nextStepBtn = document.getElementById('nextStepBtn');
    const loginBtn = document.getElementById('loginBtn');
    const nationalCodeInput = document.getElementById('nationalCode');
    const serialNumberInput = document.getElementById('serialNumber');
    const birthDateInput = document.getElementById('birthDate');
    
    // نمایش خودکار مودال هنگام لود صفحه
    function showModalOnLoad() {
        modalbox.classList.add('active');
        panellogin.style.display = 'block';
        wellcome.style.display = 'none';
        
        // ریست کردن فرم و غیرفعال کردن دکمه
        nationalCodeInput.value = '';
        serialNumberInput.value = '';
        birthDateInput.value = '';
        nextStepBtn.disabled = true;
        nextStepBtn.classList.add('cursor-not-allowed');
        nextStepBtn.classList.remove('cursor-pointer');
    }
    
    // نمایش مودال بلافاصله پس از لود صفحه
    showModalOnLoad();
    
    // بررسی وضعیت فرم برای فعال/غیرفعال کردن دکمه
    function checkFormValidity() {
        const nationalCode = nationalCodeInput.value.trim();
        const serialNumber = serialNumberInput.value.trim();
        const birthDate = birthDateInput.value.trim();
        
        // بررسی اینکه آیا همه فیلدها پر شده‌اند
        if (nationalCode && serialNumber && birthDate) {
            nextStepBtn.disabled = false;
            nextStepBtn.classList.remove('cursor-not-allowed');
            nextStepBtn.classList.add('cursor-pointer');
        } else {
            nextStepBtn.disabled = true;
            nextStepBtn.classList.add('cursor-not-allowed');
            nextStepBtn.classList.remove('cursor-pointer');
        }
    }
    
    // اضافه کردن event listener برای بررسی وضعیت فرم
    nationalCodeInput.addEventListener('input', checkFormValidity);
    serialNumberInput.addEventListener('input', checkFormValidity);
    birthDateInput.addEventListener('input', checkFormValidity);
    
    // رفتن به مرحله بعد
    nextStepBtn.addEventListener('click', function() {
        if (!nextStepBtn.disabled) {
            panellogin.style.display = 'none';
            wellcome.style.display = 'block';
        }
    });
    
    // ورود به پنل
    loginBtn.addEventListener('click', function() {
        modalbox.classList.remove('active');
        
        // تاخیر برای تکمیل انیمیشن قبل از ریست
        setTimeout(() => {
            panellogin.style.display = 'block';
            wellcome.style.display = 'none';
        }, 400);
        
        alert('ورود به پنل انجام شد!');
        // در اینجا می‌توانید کاربر را به صفحه پنل هدایت کنید
    });
    
    // بستن مودال با کلیک خارج از آن
    modalbox.addEventListener('click', function(e) {
        // اگر روی خود مودال کلیک شده (نه روی فرم‌ها)
        if (e.target === modalbox) {
            modalbox.classList.remove('active');
            
            // تاخیر برای تکمیل انیمیشن قبل از ریست
            setTimeout(() => {
                panellogin.style.display = 'block';
                wellcome.style.display = 'none';
            }, 400);
        }
    });
    
    // جلوگیری از بسته شدن مودال با کلیک روی فرم‌ها
    panellogin.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    wellcome.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});


// isotope 

var portfolio = $('#portfolio-container').isotope({
    originLeft: false
});
$('#portfolio-filter > div').on('click', function () {
    $("#portfolio-filter > div").removeClass('active');
    $(this).addClass('active');
    portfolio.isotope({
        filter: $(this).data('filter')
    });
});