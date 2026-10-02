const modal = document.querySelector('[data-modal]');
const openModal = () => modal.showModal();
const closeModal = () => modal.close();

document.querySelectorAll('[data-open-modal]').forEach((button) => button.addEventListener('click', openModal));
document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModal));

modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

document.querySelector('[data-interest-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const success = event.currentTarget.querySelector('.form-success');
  success.textContent = 'Thank you. We will be in touch soon.';
  event.currentTarget.reset();
});
