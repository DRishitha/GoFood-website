const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const closeButton = document.getElementById('closeButton');
const btn = document.querySelector(".btn");
const text = document.querySelector(".text");

btn.addEventListener('click',function(){
    btn.style.backgroundColor = "green"
    text.innerHTML = '<i class="fa-solid fa-check"></i>'
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
closeButton.addEventListener("click", () => {
    history.back();
  });