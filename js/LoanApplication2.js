
// مدیریت وضعیت مراحل و دکمه‌ها
document.addEventListener('DOMContentLoaded', function () {
    let currentStep = 1;
    const totalSteps = 5;

    // تنظیم وضعیت اولیه
    updateStepUI();

    // رویدادهای کلیک برای دکمه‌های مرحله بعد
    document.getElementById('step1-next').addEventListener('click', function () {
        if (validateStep(1)) {
            moveToStep(2);
        }
    });

    document.getElementById('step2-next').addEventListener('click', function () {
        if (validateStep(2)) {
            moveToStep(3);
        }
    });

    document.getElementById('step3-next').addEventListener('click', function () {
        // بدون اعتبارسنجی برای مرحله 3
        moveToStep(4);
    });

    document.getElementById('step4-next').addEventListener('click', function () {
        if (validateStep(4)) {
            moveToStep(5);
        }
    });
       document.getElementById('step5-next').addEventListener('click', function () {
        if (validateStep(5)) {
            moveToStep(6);
        }
    });
           document.getElementById('step6-next').addEventListener('click', function () {
        if (validateStep(6)) {
            moveToStep(7);
        }
    });
    // رویدادهای کلیک برای دکمه‌های مرحله قبل
    document.getElementById('step2-prev').addEventListener('click', function () {
        moveToPreviousStep(1);
    });

    document.getElementById('step3-prev').addEventListener('click', function () {
        moveToPreviousStep(2);
    });

    document.getElementById('step4-prev').addEventListener('click', function () {
        moveToPreviousStep(3);
    });

    document.getElementById('step5-prev').addEventListener('click', function () {
        moveToPreviousStep(4);
    });
      document.getElementById('step6-prev').addEventListener('click', function () {
        moveToPreviousStep(5);
    });
    // رویدادهای ورودی برای اعتبارسنجی
    document.querySelectorAll('.step1-input').forEach(input => {
        input.addEventListener('input', function () {
            validateStep(1);
        });
    });

    document.querySelectorAll('.step2-input').forEach(input => {
        input.addEventListener('input', function () {
            validateStep(2);
        });
    });

    document.querySelectorAll('.step4-input').forEach(input => {
        input.addEventListener('input', function () {
            validateStep(4);
        });
    });

    // تابع برای حرکت به مرحله بعد
    function moveToStep(step) {
        // علامت‌گذاری مرحله فعلی به عنوان کامل
        document.querySelector(`.step[data-id="${currentStep}"]`).classList.remove('active');
        document.querySelector(`.step[data-id="${currentStep}"]`).classList.add('complete');

        // پنهان کردن محتوای مرحله فعلی
        document.querySelector(`.step-content[data-id="${currentStep}"]`).classList.remove('active');

        // به‌روزرسانی مرحله فعلی
        currentStep = step;

        // نمایش محتوای مرحله جدید
        document.querySelector(`.step-content[data-id="${currentStep}"]`).classList.add('active');

        // علامت‌گذاری مرحله جدید به عنوان فعال
        document.querySelector(`.step[data-id="${currentStep}"]`).classList.add('active');

        // به‌روزرسانی UI
        updateStepUI();
    }

    // تابع برای حرکت به مرحله قبل
    function moveToPreviousStep(step) {
        // حذف وضعیت complete از مرحله فعلی
        document.querySelector(`.step[data-id="${currentStep}"]`).classList.remove('complete');
        document.querySelector(`.step[data-id="${currentStep}"]`).classList.remove('active');

        // پنهان کردن محتوای مرحله فعلی
        document.querySelector(`.step-content[data-id="${currentStep}"]`).classList.remove('active');

        // به‌روزرسانی مرحله فعلی
        currentStep = step;

        // نمایش محتوای مرحله جدید
        document.querySelector(`.step-content[data-id="${currentStep}"]`).classList.add('active');

        // علامت‌گذاری مرحله جدید به عنوان فعال
        document.querySelector(`.step[data-id="${currentStep}"]`).classList.add('active');

        // به‌روزرسانی UI
        updateStepUI();
    }

    // تابع برای اعتبارسنجی مرحله
    function validateStep(step) {
        let isValid = true;
        let nextButton = document.getElementById(`step${step}-next`);

        if (step === 1) {
            // اعتبارسنجی مرحله 1
            document.querySelectorAll('.step1-input').forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if (isValid) {
                nextButton.disabled = false;
                nextButton.classList.remove('btn-disabled');
            } else {
                nextButton.disabled = true;
                nextButton.classList.add('btn-disabled');
            }
        } else if (step === 2) {
            // اعتبارسنجی مرحله 2
            document.querySelectorAll('.step2-input').forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if (isValid) {
                nextButton.disabled = false;
                nextButton.classList.remove('btn-disabled');
            } else {
                nextButton.disabled = true;
                nextButton.classList.add('btn-disabled');
            }
        } else if (step === 3) {
            // بدون اعتبارسنجی برای مرحله 3 - همیشه فعال
            nextButton.disabled = false;
            nextButton.classList.remove('btn-disabled');
            isValid = true;
        } else if (step === 4) {
            // اعتبارسنجی مرحله 4
            document.querySelectorAll('.step4-input').forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                }
            });

            if (isValid) {
                nextButton.disabled = false;
                nextButton.classList.remove('btn-disabled');
            } else {
                nextButton.disabled = true;
                nextButton.classList.add('btn-disabled');
            }
        }

        // به‌روزرسانی وضعیت filled برای inputها
        if (step !== 3) { // مرحله 3 از input استفاده نمی‌کند
            document.querySelectorAll(`.step${step}-input`).forEach(input => {
                if (input.value.trim()) {
                    input.classList.add('filled');
                } else {
                    input.classList.remove('filled');
                }
            });
        }

        return isValid;
    }

    // تابع برای به‌روزرسانی UI مراحل
    function updateStepUI() {
        // به‌روزرسانی وضعیت دکمه‌های مرحله قبل
        document.querySelectorAll('[id$="-prev"]').forEach(button => {
            if (currentStep === 1) {
                button.style.display = 'none';
            } else {
                button.style.display = 'flex';
            }
        });

        // اعتبارسنجی مرحله فعلی
        validateStep(currentStep);
    }

    // مدیریت آپلود مدارک در مرحله 3 (فقط برای نمایش UI)
    document.querySelectorAll('.doc-file-input').forEach(input => {
        input.addEventListener('change', function(e) {
            const docId = this.getAttribute('data-doc-id');
            const container = document.querySelector(`.doc-container[data-doc-id="${docId}"]`);
            
            if (this.files && this.files[0]) {
                // نمایش اطلاعات آپلود شده
                container.classList.add('doc-uploaded');
                
                // تنظیم تاریخ آپلود
                const now = new Date();
                const uploadDate = `${now.getFullYear()}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getDate().toString().padStart(2, '0')}`;
                container.querySelector('.doc-upload-date').textContent = uploadDate;
            }
        });
    });
});

// radio btn

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