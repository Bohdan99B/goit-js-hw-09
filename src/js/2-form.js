// Ключ для localStorage
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт з даними форми
let formData = {
  email: '',
  message: '',
};

// Отримуємо DOM-елементи
const form = document.querySelector('.feedback-form');

// ===================================================
// 1. При завантаженні сторінки відновлюємо дані з localStorage
// ===================================================
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email || '';
  form.elements.message.value = formData.message || '';
}

// ===================================================
// 2. Відстежуємо input у формі (делегування подій)
// ===================================================
form.addEventListener('input', event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// ===================================================
// 3. Відправка форми
// ===================================================
form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted form data:', formData);

  // Очищення
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});
