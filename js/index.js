document.addEventListener('DOMContentLoaded', function() {
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
            for(let i = 0; i < items.length; i++) {
                if(items[i].classList.contains('active')) {
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
            
            if(activePayTime) activePayTime.classList.add('active');
            if(activePayMount) activePayMount.classList.add('active');
            if(activePayTable) activePayTable.classList.add('active');
        }

        // اضافه کردن event listener برای دکمه‌های سمت چپ (payTime)
        if(leftBtns[0]) {
            leftBtns[0].addEventListener('click', function() {
                const newIndex = prevItem(payTimeItems);
                syncAllItems(newIndex);
            });
        }

        if(rightBtns[0]) {
            rightBtns[0].addEventListener('click', function() {
                const newIndex = nextItem(payTimeItems);
                syncAllItems(newIndex);
            });
        }

        // اضافه کردن event listener برای دکمه‌های سمت راست (payMount)
        if(leftBtns[1]) {
            leftBtns[1].addEventListener('click', function() {
                const newIndex = prevItem(payMountItems);
                syncAllItems(newIndex);
            });
        }

        if(rightBtns[1]) {
            rightBtns[1].addEventListener('click', function() {
                const newIndex = nextItem(payMountItems);
                syncAllItems(newIndex);
            });
        }
    });
});