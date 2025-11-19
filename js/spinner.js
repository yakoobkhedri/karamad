function showSpinner(button) {
    // پیدا کردن spinner داخل دکمه
    const spinner = button.querySelector('.spinner-border');
    const buttonText = button.querySelector('span');

    // نمایش spinner و تغییر متن دکمه
    spinner.style.display = 'inline-block';
    buttonText.textContent = 'در حال ارسال...';
    button.disabled = true;

    // پس از 3 ثانیه مخفی کردن spinner و بازگرداندن حالت اولیه
    setTimeout(function () {
        spinner.style.display = 'none';
        buttonText.textContent = 'ارسال';
        button.disabled = false;
    }, 3000);
}