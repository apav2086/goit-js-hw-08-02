import throttle from 'lodash.throttle';
const emailEl = document.querySelector('label [name=email]');

const messageEl = document.querySelector('label [name=message]');
//console.log(messageEl);
const formEl = document.querySelector('form');
const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(savedFormData);
formEl.addEventListener('input', throttle(event => {
    const formData = {
        email: emailEl.value,
        message: messageEl.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500),
);

if (savedFormData) {
    emailEl.value = savedFormData.email;
    messageEl.value = savedFormData.message;
}
formEl.addEventListener('submit', event => {
    event.preventDefault();
    formEl.reset();
    localStorage.removeItem('feedback-form-state')
});

