console.log('work');
const thirdBorder = document.querySelector('.btn-remove');
thirdBorder.addEventListener('click', (event) => {
  event.preventDefault();
  event.target.style.border = '1rem dotted blue'
  event.stopPropagation();    
});