let id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const wrapperGuitar = document.querySelector(".wrapper-guitar"); // пустой див в корзине
let ifBasketIsEmpty = document.querySelector(".Empty");
let orderButtons = document.querySelector(".want-to-order");

orderButtons.style.opacity = "0";

let amountGuitarToOrder = 0;

let allPrice = 0;

for (let i = 0; i < id.length; i++) {
  let key = id[i];
  if (localStorage.getItem(key)) {
    let item = JSON.parse(localStorage.getItem(key));
    allPrice += item.price * item.count;
    const cartItemHTML = `
    <div data-id="${key}" class="cart-element">
    <div class="image-element">
      <img src="${item.img}" alt="" />
    </div>
    <div class="text_about_element">
      <div>
        <p class="title-element" style="font-weight:bold">Модель: ${item.name}</p>
      </div>
      <div>
        <p class="count-element">Количество: ${item.count}</p>
      </div>
      <div >
        <p class="price-element">Цена: ${item.price * item.count}</p>
      </div>
    </div>
    <div class="butt-del">
      <button onclick="delCartItem(this)" class="delete"><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-trash-2"
      >
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1="10" x2="10" y1="11" y2="17" />
        <line x1="14" x2="14" y1="11" y2="17" />
      </svg>
      </button>
    </div>
  </div>`;
      wrapperGuitar.insertAdjacentHTML(`beforeend`, cartItemHTML);
      amountGuitarToOrder += item.count;
  }
}

if(amountGuitarToOrder != 0){
  ifBasketIsEmpty.style.opacity = "0";
  orderButtons.style.opacity = "1";
}

let priceText = document.querySelector(".total");
priceText.innerText = allPrice;

let guitarAmount = document.querySelector(".amount");
guitarAmount.innerText = amountGuitarToOrder;

function delCartItem(e) {
  const item = e.closest(".cart-element");
  const temp = item.getAttribute("data-id");
  allPrice -= item.querySelector(".price-element").textContent.match(/\d+/);
  priceText.innerText = allPrice;
  amountGuitarToOrder -= item.querySelector(".count-element").textContent.match(/\d+/);
  if(amountGuitarToOrder == 0){
    ifBasketIsEmpty.style.opacity = "1";
    orderButtons.style.opacity = "0";
  }
  guitarAmount.innerText = amountGuitarToOrder;
  localStorage.removeItem(temp);
  item.remove();
}
