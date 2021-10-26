// console.log('work');
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

// window.onload = function(){
//   var closeIcon = document.getElementsByClassName("close-bag");
//   for (var i = 0; i < closeIcon.length; i++) {
//     closeIcon[i].addEventListener('click', function(){
//       alert('I was clicked!');
//     });
//   }
// };

function myFunction(e) {
  event.preventDefault();
  var IDminiCart = document.getElementById("mini-cart");
  var IDminiCartMask = document.getElementById("minibag_mask");
  IDminiCart.innerHTML += SectionHtml;
  IDminiCart.classList.remove("show-minibag");
  IDminiCart.style.display = 'none';
  IDminiCart.classList.add("hide-minibag");
  document.body.style.overflow = "auto";
  IDminiCartMask.style.display = 'none';
}