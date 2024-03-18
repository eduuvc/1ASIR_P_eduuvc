document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.check-in-form');
    const qrContainer = document.getElementById('qr-container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const confirmation = document.getElementById('confirmation').value;

        new QRious({
            element: document.getElementById('qr-code'),
            value: `Email: ${email}\nConfirmación: ${confirmation}`,
            size: 200
        });

        form.style.display = 'none';
        qrContainer.style.display = 'block';
    });
});