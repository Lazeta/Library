// Получаем модальные окна и кнопки
const profileAccount = document.querySelector(".profile-container");
const dropMenuProfile = document.querySelector(".drop-menu__no-authorization");
const loginBtn = document.querySelector(".login-button");
const registerBtn = document.querySelector(".register-button");
const myProfileBtn = document.querySelector(".my-profile__btn");
const profileOutBtn = document.querySelector(".profile-button__out");
const registerModal = document.querySelector(".modal__register");
const loginModal = document.querySelector(".modal__login");
const myProfileModal = document.querySelector(".modal__profile");
const modalBtnClose = document.querySelector(".btn__close");
const overlay = document.querySelector(".overlay");
const htmlElement = document.documentElement;
const signUpBtn = document.querySelector(".sign_up_1");
const signUpBtnTwo = document.querySelector(".sign_up_2");
const signUpBtnThree = document.querySelector(".sign_up_3");
const loginBtnOne = document.querySelector(".login_1");
const loginBtnTwo = document.querySelector(".login_2");
const loginBtnThree = document.querySelector(".login_3");
const myProfileBtnTwo = document.querySelector(".profile_btn_2");


// Функция отображения модального окна
function showModal() {
  overlay.classList.add("show");
  document.body.classList.add("no-scroll");
  htmlElement.classList.add("no-scroll");
}

// Функция скрытия модального окна
function hideModal() {
  registerModal.classList.remove("show");
  loginModal.classList.remove("show");
  myProfileModal.classList.remove("show");
  dropMenuProfile.classList.remove("_active");
  overlay.classList.remove("show");
  document.body.classList.remove("no-scroll");
  htmlElement.classList.remove("no-scroll");

}

// Обработчики событий для отображения модальных окон
function openRegistrModal() {
  if (loginModal.classList.contains("show")) {
    loginModal.classList.remove("show");
  }
  registerModal.classList.toggle("show");
  showModal();
}

function openLoginModal() {
  if (registerModal.classList.contains("show")) {
    registerModal.classList.remove("show");
  }
  loginModal.classList.toggle("show");
  showModal();
}

function openMyProfileModal() {
  myProfileModal.classList.toggle("show");
  showModal();
}

function leaveProfile() {
  console.log(`написать функцию выхода из аккаунта`);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

profileAccount.addEventListener("click", function () {
  if (dropMenuProfile.classList.contains("_active")) {
    dropMenuProfile.classList.remove("_active");
  } else if (!dropMenuProfile.classList.contains("_active")) {
    dropMenuProfile.classList.add("_active");
  }
});

const buttonsBuy = document.querySelectorAll(".buy");

document.addEventListener("click", function (event) {
  const isClickDropMenuProfile = dropMenuProfile.contains(event.target);
  const isClickProfileAccount = profileAccount.contains(event.target);
  const isClickLoginModal = loginModal.contains(event.target);
  const isClickRegisterModal = registerModal.contains(event.target);
  const isClickMyProfileModal = myProfileModal.contains(event.target);
  const isClickSignUpBtnThree = signUpBtnThree.contains(event.target);
  const isClickSignUpBtnTwo = signUpBtnTwo.contains(event.target);
  const isClickLoginBtnThree = loginBtnThree.contains(event.target);
  const isClickBtnBuy = Array.from(buttonsBuy).some(button => button.contains(event.target));

  if (
    !isClickDropMenuProfile &&
    !isClickProfileAccount &&
    !isClickLoginModal &&
    !isClickRegisterModal &&
    !isClickMyProfileModal &&
    !isClickSignUpBtnThree &&
    !isClickLoginBtnThree && 
    !isClickSignUpBtnTwo &&
    !isClickBtnBuy
  ) hideModal();
  
    if (isClickBtnBuy) {
      scrollToTop();
      showModal();
      openLoginModal();
    }
});

// Закрытие модального окна при нажатии клавиши Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.key === "Esc") {
    hideModal();
  }
});

loginBtn.addEventListener('click', () => {
  loginModal.classList.add('show');
  showModal();
});

signUpBtn.addEventListener('click', () => {
  showModal();
})

signUpBtnTwo.addEventListener('click', () => {
  showModal();
  openRegistrModal();
})

signUpBtnThree.addEventListener('click', () => {
  showModal();
  scrollToTop();
  registerModal.classList.toggle("show");
});

loginBtnOne.addEventListener('click', () => {
  openLoginModal();
})

loginBtnTwo.addEventListener('click', () => {
  loginModal.classList.add('show')
  showModal();
})

loginBtnThree.addEventListener('click', () => {
  showModal();
  scrollToTop();
  loginModal.classList.toggle('show');
})

myProfileBtnTwo.addEventListener('click', () => {
  showModal();
})