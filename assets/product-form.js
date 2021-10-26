class ProductForm extends HTMLElement {
  constructor() {
    super();   

    this.form = this.querySelector('form');
    this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
    this.cartNotification = document.querySelector('cart-notification');
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    this.cartNotification.setActiveElement(document.activeElement);
    
    const submitButton = this.querySelector('[type="submit"]');

    submitButton.setAttribute('disabled', true);
    submitButton.classList.add('loading');

    const body = JSON.stringify({
      ...JSON.parse(serializeForm(this.form)),
      sections: this.cartNotification.getSectionsToRender().map((section) => section.id),
      sections_url: window.location.pathname
    });

    fetch(`${routes.cart_add_url}`, { ...fetchConfig('javascript'), body })
      .then((response) => response.json())
      .then((parsedState) => {
      
//       mini cart section render
      fetch('/?sections=cart-items')
      .then((response) => response.json())
      .then((data) => {
        var SectionHtml = data['cart-items'] ;
//         console.log(SectionHtml);
        var IDminiCart = document.getElementById("mini-cart");
        var IDminiCartMask = document.getElementById("minibag_mask");
        IDminiCart.innerHTML += SectionHtml;
        IDminiCart.classList.add("show-minibag");
        //         $('#mini-cart').addClass("show-minibag");

        IDminiCart.classList.remove("hide-minibag");
        //         $('#mini-cart').removeClass("hide-minibag");
      document.body.style.overflow = "hidden";
        //         $('body').toggleClass("overflow-hidden");
        IDminiCartMask.style.display = 'block';
        //         $('.minibag-mask').show();

      });
      console.log("notification off");
//         this.cartNotification.renderContents(parsedState);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        submitButton.classList.remove('loading');
        submitButton.removeAttribute('disabled');
      });
  }
}

customElements.define('product-form', ProductForm);
