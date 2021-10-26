console.log('work');
// const thirdBorder = document.querySelector('.btn-remove');
// thirdBorder.addEventListener('click', (event) => {
//   event.preventDefault();
//   event.target.style.border = '1rem dotted blue'
//   event.stopPropagation();    
// });


// let closeBag = document.querySelector('#closeBag');
// closeBag.addEventListener('click', (event) => {
//   event.preventDefault();
//   var IDminiCart = document.getElementById("mini-cart");
//   var IDminiCartMask = document.getElementById("minibag_mask");
//   IDminiCart.innerHTML += SectionHtml;
//   IDminiCart.classList.remove("show-minibag");
//   IDminiCart.style.display = 'none';
//   IDminiCart.classList.add("hide-minibag");
//   document.body.style.overflow = "auto";
//   IDminiCartMask.style.display = 'none';
// });


document.getElementById('#closeBag').forEach(button => button.addEventListener('click', (event) => {
console.log('click work');
}));


