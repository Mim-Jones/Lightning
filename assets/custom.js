const button = document.querySelector('.btn-remove');
console.log('work');
button.addEventListener('click', event => {
  event.preventDefault();
  console.log(event.detail);
});