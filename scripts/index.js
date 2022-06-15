const page = document.querySelector('.page');
const btnMenu = page.querySelector('.header__burger');
const popupMenu = page.querySelector('.header__menu');

function openPopupMenu(evt) {
  const btnMenu = evt.target;
  //console.log(btnCardImage.closest('.card__image').src);
  //console.log(btnCardImage.nextElementSibling.firstElementChild.textContent);
  popupMenu.classList.toggle('header__menu_opened');
};

btnMenu.addEventListener('click', openPopupMenu);
