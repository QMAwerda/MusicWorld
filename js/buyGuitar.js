let itemCount = 0; // счетчик товаров
goodsCount = document.getElementById("cart_num"); // число товаров в корзине
const goodsPrice = document.querySelector(".total"); // общая сумма в корзине
let itemPrice = 0; // счетчик цены
const wrapperGuitar = document.querySelector(".wrapper-guitar"); // пустой див в корзине
let buy_counter = 0;

// При нажатии на какой-либо элемент на странице
window.addEventListener("click", (e) => {

// data-buy - имя кнопки "купить" (if нажали на кнопку купить)
  if (e.target.hasAttribute("data-buy")) {
    var size = window.innerWidth;
    if(size < 650){
      // Код на добавление сообщения о покупке при размере где бургер меню
      let msg = document.createElement("div");
      msg.innerText = `Товар добавлен в корзину!`;
      msg.style.fontSize = "26px";
      msg.style.position = "fixed";
      msg.style.top = "40%";
      msg.style.left = "10%";
      msg.style.width = "50px";
      msg.style.color = "black";
      document.querySelector(".Guitars").appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, 1500);
    }

    // guitar - ближайший к кнопке див гитары
    const guitar = e.target.closest(".guitar");
    buy_counter++;
    let item = {
      img: guitar
        // класс div картинки
        .querySelector(".photo")
        // класс img картинки
        .querySelector(".png")
        // ее адрес
        .getAttribute("src"),
      name: guitar
        // название
        .querySelector(".text-about-guitar")
        // текст внутри p тега это inner text
        .querySelector(".model-name").innerText,
      price: guitar
        // цена элемента
        .querySelector(".text-about-guitar")
        .querySelector(".price-guitar").innerText,
        // id гитары
      id: guitar.querySelector("[data-id]").getAttribute("data-id"),
      count: 1,
    };
    // console.log(item.title);
    let key = item.id;
    goodsCount.innerText = buy_counter;
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(item));
    }
    else {
      item = JSON.parse(localStorage.getItem(key));
      item.count += 1;
      localStorage.setItem(key, JSON.stringify(item));
    }
  }
});
