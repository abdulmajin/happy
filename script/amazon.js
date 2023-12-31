import { cart, AddCart, qCoutadd } from "../data/cart.js";
let lst = document.querySelector(".list_p");

let project = [
  {
    id: "01",
    img: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      star: 4.5,
      count: 87,
    },
    price: 1090,
  },
  {
    id: "02",
    img: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      star: 4,
      count: 127,
    },
    price: 2098,
  },

  {
    id: "03",
    img: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      star: 4.5,
      count: 56,
    },
    price: 799,
  },
  {
    id: "04",
    img: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      star: 5,
      count: 56,
    },

    price: 18.99,
  },

  {
    id: "05",
    img: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      star: 4,
      count: 37,
    },
    price: 2067,
  },

  {
    id: "06",
    img: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking",
    rating: {
      star: 4.5,
      count: 175,
    },
    price: 3499,
  },
];

let html = "";
project.forEach((product) => {
  html += `<div class="product-container">
  <div class="product-image-container">
    <img
      class="product-image"
      src="${product.img}"
    />
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${product.name}
  </div>

  <div class="product-rating-container">
    <img
      class="product-rating-stars"
      src="images/ratings/rating-${product.rating.star * 10}.png"
    />
    <div class="product-rating-count link-primary">${product.rating.count}</div>
  </div>

  <div class="product-price">$${(product.price / 100).toFixed(2)}</div>

  <div class="product-quantity-container">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart add-cart">
    <img src="images/icons/checkmark.png" />
    Added
  </div>

  <button class="add-to-cart-button  button-primary addCartBtn" data-product-id="${
    product.id
  }">Add to Cart</button>
</div>
`;
});

lst.innerHTML = html;
let btnCard = document.querySelectorAll(".addCartBtn");

addEventListener("click", () => {
  AddCart();
});

console.log(cart);
