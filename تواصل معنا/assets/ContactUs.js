const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

emailjs.init({
    publicKey: "SfFnuweABzOrQMvda",
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    emailjs.sendForm('service_nmp4j9h', 'template_irqcwns', this)
        .then(function () {
            alert('تم إرسال الرسالة بنجاح!');
            document.getElementById('contact-form').reset(); // مسح البيانات بعد الإرسال
        }, function (error) {
            alert('حدث خطأ أثناء الإرسال، حاول مرة أخرى.');
            console.error('EmailJS Error:', error);
        });
});