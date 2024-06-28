function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage: 'auto'},
        'google_translate_element'
    );
}






const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 300);
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const subscribeForm = document.querySelector('.bubble form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            const formData = {
                nombre: nombre,
                email: email,
                mensaje: mensaje
            };

            const formDataJson = JSON.stringify(formData);

            localStorage.setItem('User_Inqury', formDataJson);

            contactForm.reset();
            alert('Form data saved successfully!');
        });
    }

    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email2 = document.getElementById('email2').value;

            localStorage.setItem('newsletter', email2);

            document.getElementById('email2').value = '';
            alert('Email saved successfully!');
        });
    }
});


