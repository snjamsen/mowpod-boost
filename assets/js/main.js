jQuery(document).ready(function($) {
  // aos
  AOS.init();

  // rellax
  var rellax = new Rellax('.rellax', {
    center:true
  });

  // burgermenu
  $('.burgermenu-open, .burgermenu-close').on('click', function() {
    $('.burgermenu').toggleClass('active');
  });
})


/* Boost calculate */
let boostResult = document.querySelector('.boost__counter--sum');
let approxDownloads = document.querySelector('.approx-downloads');
let boostValue;

function boostInput(boost) {
    boostValue = +boost.value;
    boost = "$" + Math.floor((+boost.value * 0.8));
    boostResult.innerHTML = boost;
    console.log(boostValue);
}

function boostDuration(dur) {
    dur = Math.floor(boostValue / +dur.value);
    approxDownloads.innerHTML = dur + " ";
}


// Input title
let titleLenght = document.querySelector('.title-form__input-title--display');

function titleInput(title) {
    title = title.value.length;
    titleLenght.innerHTML = title + "/40";
}

// Input subtitle
let subtitleLenght = document.querySelector('.title-form__input-subtitle--display');

function subtitleInput(subtitle) {
    subtitle = subtitle.value.length;
    subtitleLenght.innerHTML = subtitle + "/111";
}


// Block enter on textarea
const eleTitle = document.getElementById('title-form__input-title');

eleTitle.addEventListener('keydown', function (e) {
  // Get the code of pressed key
  const keyCode = e.which || e.keyCode;

  // 13 represents the Enter key
  if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      // Do something else such as send the message to back-end
      // ...
  }
});

const eleSubtitle = document.getElementById('title-form__input-subtitle');

eleSubtitle.addEventListener('keydown', function (e) {
  // Get the code of pressed key
  const keyCode = e.which || e.keyCode;

  // 13 represents the Enter key
  if (keyCode === 13 && !e.shiftKey) {
      // Don't generate a new line
      e.preventDefault();

      // Do something else such as send the message to back-end
      // ...
  }
});


// Card input and validator
document.addEventListener('DOMContentLoaded', () => {
  for (const el of document.querySelectorAll("[placeholder][data-slots]")) {
  const pattern = el.getAttribute("placeholder"),
  slots = new Set(el.dataset.slots || "_"),
  prev = (j => Array.from(pattern, (c,i) => slots.has(c)? j=i+1: j))(0),
  first = [...pattern].findIndex(c => slots.has(c)),
  accept = new RegExp(el.dataset.accept || "\\d", "g"),
  clean = input => {
  input = input.match(accept) || [];
  return Array.from(pattern, c =>
  input[0] === c || slots.has(c) ? input.shift() || c : c
  );
  },
  format = () => {
  const [i, j] = [el.selectionStart, el.selectionEnd].map(i => {
  i = clean(el.value.slice(0, i)).findIndex(c => slots.has(c));
  return i<0? prev[prev.length-1]: back? prev[i-1] || first: i; }); el.value=clean(el.value).join``; el.setSelectionRange(i, j); back=false; }; let back=false; el.addEventListener("keydown", (e)=> back = e.key === "Backspace");
      el.addEventListener("input", format);
      el.addEventListener("focus", format);
      el.addEventListener("blur", () => el.value === pattern && (el.value=""));
      }
});

  var user_name = document.querySelector(".user_name");
  var set_card_number = document.querySelector(".set_card_number");
  var user_cardcvv = document.querySelector(".user_card_cvv")
  var user_name_input = document.getElementById("user_name_input");
  var user_card_number_input= document.getElementById("user_card_number_input");
  function userName(name){
      
      user_name.innerHTML = name; 
  } 
  
function userCardNumber(cardNumber){
    set_card_number.innerHTML = cardNumber;
}
  
function usercardcvv(cvv){
      user_cardcvv.innerHTML=cvv; 
}