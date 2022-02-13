window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos > 400) {
    document.querySelector(".header").classList.add("header--scroll");
  } else if (currentScrollPos < 200) {
    document.querySelector(".header").classList.remove("header--scroll");
  }
};

const slider = new Siema({
  selector: ".slider",
  loop: true,
  onChange: onChangeSlider,
});
function onChangeSlider() {
  console.log(slider.currentSlide);
  const dots = document.querySelectorAll(".reviews__dot");
  dots.forEach((dot) => dot.classList.remove("reviews__dot--active"));
  dots[slider.currentSlide].classList.add("reviews__dot--active");
}

// const langBtn = document.querySelector(".header__button--lang");
// const langDropdown = document.querySelector(".header-lang__dropdown");
// langBtn.addEventListener("click", () => {
//   langDropdown.classList.toggle("header-lang__dropdown--show");
// });
// document.querySelectorAll(".header-lang__btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     langDropdown.classList.remove("header-lang__dropdown--show");
//   });
// });

// const searchBtn = document.querySelector(".header__button--search");
// const searchDropdown = document.querySelector(".header-search__dropdown");
// const searchClose = document.querySelector(".header-search__close");
// searchBtn.addEventListener("click", () => {
//   searchDropdown.classList.toggle("header-search__dropdown--show");
// });
// searchClose.addEventListener("click", () => {
//   searchDropdown.classList.remove("header-search__dropdown--show");
// });

// const menuBtns = document.querySelectorAll(".header__li button");
// let index;
// menuBtns.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     const open = [...menuBtns]
//       .map((el) => {
//         return el.nextElementSibling.classList.contains(
//           "header__menu-dropdown--show"
//         );
//       })
//       .some((el) => {
//         return el;
//       });
//     menuBtns.forEach((btn) => {
//       btn.nextElementSibling.classList.remove("header__menu-dropdown--show");
//     });
//     if (index !== i || !open) {
//       btn.nextElementSibling.classList.toggle("header__menu-dropdown--show");
//     }
//     index = i;
//   });
// });

// const modalMenu = document.querySelector(".modal-menu");
// const burgerBtn = document.querySelector(".header-burger__btn");
// const modalClose = document.querySelector(".modal-menu__close");
// burgerBtn.addEventListener("click", () => {
//   modalMenu.classList.add("modal-menu--show");
// });
// modalClose.addEventListener("click", () => {
//   modalMenu.classList.remove("modal-menu--show");
// });

// const modalMenuBrand = document.querySelector(".modal-menu--brand");
// const brandBtn = document.querySelector(".modal-menu__item--brand");
// const brandClose = document.querySelector(
//   ".modal-menu--brand .modal-menu__close"
// );
// const brandArrow = document.querySelector(
//   ".modal-menu--brand .modal-menu__arrow"
// );
// brandBtn.addEventListener("click", () => {
//   modalMenuBrand.classList.add("modal-menu--show");
// });
// brandArrow.addEventListener("click", () => {
//   modalMenuBrand.classList.remove("modal-menu--show");
// });
// brandClose.addEventListener("click", () => {
//   modalMenu.classList.remove("modal-menu--show");
//   modalMenuBrand.classList.remove("modal-menu--show");
// });

// const modalMenuTech = document.querySelector(".modal-menu--tech");
// const techBtn = document.querySelector(".modal-menu__item--tech");
// const techClose = document.querySelector(
//   ".modal-menu--tech .modal-menu__close"
// );
// const techArrow = document.querySelector(
//   ".modal-menu--tech .modal-menu__arrow"
// );
// techBtn.addEventListener("click", () => {
//   modalMenuTech.classList.add("modal-menu--show");
// });
// techArrow.addEventListener("click", () => {
//   modalMenuTech.classList.remove("modal-menu--show");
// });
// techClose.addEventListener("click", () => {
//   modalMenu.classList.remove("modal-menu--show");
//   modalMenuTech.classList.remove("modal-menu--show");
// });

// const modalMenuProd = document.querySelector(".modal-menu--prod");
// const prodBtn = document.querySelector(".modal-menu__item--prod");
// const prodClose = document.querySelector(
//   ".modal-menu--prod .modal-menu__close"
// );
// const prodArrow = document.querySelector(
//   ".modal-menu--prod .modal-menu__arrow"
// );
// prodBtn.addEventListener("click", () => {
//   modalMenuProd.classList.add("modal-menu--show");
// });
// prodArrow.addEventListener("click", () => {
//   modalMenuProd.classList.remove("modal-menu--show");
// });
// prodClose.addEventListener("click", () => {
//   modalMenu.classList.remove("modal-menu--show");
//   modalMenuProd.classList.remove("modal-menu--show");
// });

// const modalMenuFaq = document.querySelector(".modal-menu--faq");
// const faqBtn = document.querySelector(".modal-menu__item--faq");
// const faqClose = document.querySelector(".modal-menu--faq .modal-menu__close");
// const faqArrow = document.querySelector(".modal-menu--faq .modal-menu__arrow");
// faqBtn.addEventListener("click", () => {
//   modalMenuFaq.classList.add("modal-menu--show");
// });
// faqArrow.addEventListener("click", () => {
//   modalMenuFaq.classList.remove("modal-menu--show");
// });
// faqClose.addEventListener("click", () => {
//   modalMenu.classList.remove("modal-menu--show");
//   modalMenuFaq.classList.remove("modal-menu--show");
// });

// const yearText = document.querySelector(".footer__copyright-text span");
// yearText.innerHTML = new Date().getFullYear();
