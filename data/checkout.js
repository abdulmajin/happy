//import { cart } from "./products.js";
import { products, cart, saveLocalStore  } from "./products.js";
let listHtml = document.querySelector(".js-item-list");
let itemGet;

let htmlLs = "";
let element = document.querySelector(".list_p");
element.innerHTML = '';



let fetchItem = localStorage.getItem("item");
let convlg = JSON.parse(fetchItem);

var newCart = []

function removeFromCart (productId){


  cart.forEach((cartIetmr) =>{
  

    if(cartIetmr.productId  !== productId){

      newCart.push(cartIetmr)

    }
 

  })

  cart  = newCart
  saveLocalStore ()
  console.log(newCart)

}
convlg.forEach((cartIetm) => {
  let matchProductId = cartIetm.productId;

  products.forEach((itemFetch) => {
    let ItemMatchInProduct = itemFetch.id;

    if (matchProductId === ItemMatchInProduct) {
      htmlLs += `<div class="cart-item-container checkoutItem  js-container-item-id-${matchProductId} ">
  <div class="delivery-date">Delivery date: Tuesday, June 21</div>

  <div class="cart-item-details-grid">
    <img
      class="product-image"
      src="${itemFetch.image}"
    />

    <div class="cart-item-details">
      <div class="product-name">
        ${itemFetch.name}
      </div>
      <div class="product-price">$${(itemFetch.priceCents / 100).toFixed(
        2
      )}</div>
      <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      cartIetm.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delelet-item" data-product-id="${matchProductId}">
                    Delete
                  </span>
                </div>
              </div>

    <div class="delivery-options">
      <div class="delivery-options-title">Choose a delivery option:</div>
      <div class="delivery-option">
        <input
          type="radio"
          checked
          class="delivery-option-input"
          name="delivery-option-1-${matchProductId}"
        />
        <div>
          <div class="delivery-option-date">Tuesday, June 21</div>
          <div class="delivery-option-price">FREE Shipping</div>
        </div>
      </div>
      <div class="delivery-option">
        <input
          type="radio"
          class="delivery-option-input"
          name="delivery-option-1-${matchProductId}"
        />
        <div>
          <div class="delivery-option-date">Wednesday, June 15</div>
          <div class="delivery-option-price">$4.99 - Shipping</div>
        </div>
      </div>
      <div class="delivery-option">
        <input
          type="radio"
          class="delivery-option-input"
          name="delivery-option-1"
        />
        <div>
          <div class="delivery-option-date">Monday, June 13</div>
          <div class="delivery-option-price">$9.99 - Shipping</div>
        </div>
      </div>
    </div>
  </div>
</div>`;

      //console.log(itemFetch.image, itemFetch.name, itemFetch.priceCents);
    }
  });
});

listHtml.innerHTML = htmlLs;

document.querySelectorAll(".js-delelet-item").forEach((delItem) => {
  delItem.addEventListener("click", () => {
    let productId = delItem.dataset.productId;

    let containerItemId = document.querySelector(
      `.js-container-item-id-${productId}`
    );
    
    removeFromCart (productId)

  });
});
