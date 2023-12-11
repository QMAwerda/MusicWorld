var checkbox = document.getElementById("tap"); // полоски бургера
var div = document.getElementById("navig"); // див с навигационными ссылками меню

checkbox.onchange = function() {
  var screenWidth = window.innerWidth; // ширина экрана
  if (checkbox.checked) {
    if (screenWidth <= 350){
      div.style.left = "40%";
    }
    if (screenWidth <= 420 && screenWidth > 350){
      div.style.left = "45%";
    }
    if (screenWidth <= 480 && screenWidth > 420 ){
      div.style.left = "55%";
    }
    if (screenWidth <= 520 && screenWidth > 480) {
      div.style.left = "58%";
    }
    if (screenWidth <= 550 && screenWidth > 520) {
      div.style.left = "62%";
    }
    if (screenWidth <= 650 && screenWidth > 550) {
      div.style.left = "63%";
    }
  }
  else {
    div.style.left = "100%";
  }
};
