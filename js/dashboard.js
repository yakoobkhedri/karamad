document.addEventListener('DOMContentLoaded', function() {
    // مخفی کردن دکمه‌های "انتخاب شده" در ابتدا
    const selectedBtns = document.querySelectorAll('.selected-btn');
    selectedBtns.forEach(btn => {
        btn.style.display = 'none';
    });
    
    // جزئیات بیشتر
    const detailsBtns = document.querySelectorAll('.details-btn');
    const detailsSections = document.querySelectorAll('.details');
    const items = document.querySelectorAll('.item');
    const agencyList = document.querySelector('.agency-list');
    
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            
            // مخفی کردن همه جزئیات
            detailsSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // نمایش جزئیات مربوطه
            const targetDetails = document.querySelector(`.details[data-id="${id}"]`);
            if (targetDetails) {
                targetDetails.style.display = 'block';
            }
            
            // مخفی کردن لیست
            agencyList.classList.add('hidden');
        });
    });
    
    // بازگشت از جزئیات
    const backBtns = document.querySelectorAll('.back-btn');
    backBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // مخفی کردن همه جزئیات
            detailsSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // نمایش لیست
            agencyList.classList.remove('hidden');
        });
    });
    
    // انتخاب نمایندگی از لیست
    const selectBtns = document.querySelectorAll('.select-btn');
    selectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            selectAgency(id);
        });
    });
    
    // انتخاب نمایندگی از جزئیات
    const selectDetailsBtns = document.querySelectorAll('.select-details-btn');
    selectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            selectAgency(id);
            
            // بازگشت به لیست
            detailsSections.forEach(section => {
                section.style.display = 'none';
            });
            agencyList.classList.remove('hidden');
        });
    });
    
    // تابع انتخاب نمایندگی
    function selectAgency(id) {
        // ابتدا همه آیتم‌ها را ریست کنیم
        resetAllAgencies();
        
        // سپس آیتم انتخاب شده را تنظیم کنیم
        const item = document.querySelector(`.item[data-id="${id}"]`);
        const selectBtn = item.querySelector('.select-btn');
        const selectedBtn = item.querySelector('.selected-btn');
        
        // اضافه کردن کلاس selected به آیتم انتخاب شده
        item.classList.add('selected');
        
        // مخفی کردن دکمه انتخاب و نمایش دکمه انتخاب شده
        selectBtn.style.display = 'none';
        selectedBtn.style.display = 'flex';
    }
    
    // تابع ریست کردن همه آیتم‌ها
    function resetAllAgencies() {
        items.forEach(item => {
            const selectBtn = item.querySelector('.select-btn');
            const selectedBtn = item.querySelector('.selected-btn');
            
            // حذف کلاس selected
            item.classList.remove('selected');
            
            // نمایش دکمه انتخاب و مخفی کردن دکمه انتخاب شده
            selectBtn.style.display = 'flex';
            selectedBtn.style.display = 'none';
        });
    }
});