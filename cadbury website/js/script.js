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


let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listcards = document.querySelector('.listcard');
let body = document.querySelector('body')
let total= document.querySelector('.total')
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})

closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'GAME NAME 1',
        image: '1.jpeg',
        price: 12000

    },
    {
        id: 2,
        name: 'GAME NAME 2',
        image: '2.jpeg',
        price: 15000

    },
    {
        id: 3,
        name: 'GAME NAME 3',
        image: '3.jpeg',
        price: 20000

    },
    {
        id: 4,
        name: 'GAME NAME 4',
        image: '4.jpeg',
        price: 25000

    },
    {
        id: 5,
        name: 'GAME NAME 5',
        image: '5.jpeg',
        price: 30000

    },
    {
        id: 6,
        name: 'GAME NAME 6',
        image: '6.jpeg',
        price: 35000

    },
];

let listCards = [];
function initApp(){
      products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item')
        newDiv.innerHTML = `
        <img src="images/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Card</button>

        `;
        list.appendChild(newDiv);
      })
}
initApp();

function addToCard(key){
    if(listCards[key]== null){
        listCards[key] = products[key];
        listCards[key].quantity =1;
    }
    reloadCard();
}

function reloadCard(){
    listcards.innerHTML = '';
    let count = 0;
    let totalprice =0;
    listCards.forEach((value,key)=>{totalprice=totalprice + value.price;
    count = count + value.quantity;


    if(value != null){
        let newDiv = document.createElement('li')
        newDiv.innerHTML =`
         <div><img src="images/${value.image}"/></div>
         <div>${value.name}</div>
         <div>${value.price.toLocaleString()}</div>
         <div>${value.quantity}</div>

         <div>
         <button onclick="changeQuantity(${key},${value.quantity -1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
        </div>
        `;
        listcards.appendChild(newDiv)
    }
    })
    total.innerHTML = totalprice.toLocaleString();
    quantity.innerHTML = count;

}


function changeQuantity(key , quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity=quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    }













// Add to card end

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


// var swiper = new Swiper(".about", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
