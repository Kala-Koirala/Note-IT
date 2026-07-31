document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const fields = [
        { input: 'form-name', error: 'form-name-error', check: v => v !== '' },
        { input: 'form-email', error: 'form-email-error', check: v => emailRegex.test(v) },
        { input: 'form-textarea', error: 'message-box-error', check: v => v !== '' }
    ];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        fields.forEach(({ input, error, check }) => {
            const inputEl = document.getElementById(input);
            const errorEl = document.getElementById(error);
            const valid = check(inputEl.value.trim());

            errorEl.style.display = valid ? 'none' : 'block';
            inputEl.style.borderColor = valid ? '' : 'red';
            if (!valid) isValid = false;
        });

        if (isValid) {
            alert('Message sent successfully!');
            form.reset();
        }
    });
});