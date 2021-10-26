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

function HideFunction() {
  var IDminiCart = document.getElementById("mini-cart");
  var IDminiCartMask = document.getElementById("minibag_mask");
  IDminiCart.classList.remove("show-minibag");
//   IDminiCart.style.display = 'none';
  IDminiCart.classList.add("hide-minibag");
  document.body.style.overflow = "auto";
  IDminiCartMask.style.display = 'none';
}

function ShowFuntion(IDminiCart,IDminiCartMask) {
  IDminiCart.classList.add("show-minibag");
//   IDminiCart.style.display = 'block';
  IDminiCart.classList.remove("hide-minibag");
  document.body.style.overflow = "hidden";
  IDminiCartMask.style.display = 'block';
}

const container = document.querySelector('.header__icon--cart');
const showView = (event) => {
  event.preventDefault();
  console.log('show');
  //mini cart section render
  fetch('/?sections=cart-items')
  .then((response) => response.json())
  .then((data) => {
    var SectionHtml = data['cart-items'] ;
    var IDminiCart = document.getElementById("mini-cart");
    var IDminiCartMask = document.getElementById("minibag_mask");
    IDminiCart.innerHTML = SectionHtml;
    ShowFuntion(IDminiCart,IDminiCartMask);
  });
}
const moveView = (event) => {
  console.log('move');
  HideFunction();
}
// container.onmouseleave = moveView;
container.onmouseenter = showView;