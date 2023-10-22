let navbar = document.querySelector(".header .navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let Navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  Navbar.classList.remove("active");
};
































// Add to card start

let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listcards = document.querySelector(".listcard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let addtocard = document.querySelector(".addtocard");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "1",
    image: "good 1.jpg",
    price: 120,
  },
  {
    id: 2,
    name: " 2",
    image: "good 2.jpg",
    price: 150,
  },
  {
    id: 3,
    name: " 3",
    image: "good 3.jpg",
    price: 200,
  },
  {
    id: 4,
    name: " 4",
    image: "good 4.jpg",
    price: 250,
  },
  {
    id: 5,
    name: "5",
    image: "good 4.jpg",
    price: 300,
  },
  {
    id: 6,
    name: "6",
    image: "good 7.jpeg",
    price: 350,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>

        `;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = products[key];
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listcards.innerHTML = "";
  let count = 0;
  let totalprice = 0;
  listCards.forEach((value, key) => {
    totalprice = totalprice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
         <div><img src="images/${value.image}"/></div>
         <div>${value.name}</div>
         <div>${value.price.toLocaleString()}</div>
         <div>${value.quantity}</div>

         <div>
         <button onclick="changeQuantity(${key},${
        value.quantity - 1
      })">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key},${
        value.quantity + 1
      })">+</button>
        </div>
        `;
      listcards.appendChild(newDiv);
    }
  });
  total.innerHTML = totalprice.toLocaleString();
  quantity.innerHTML = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

var swiper = new Swiper(".gallery-slider", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});