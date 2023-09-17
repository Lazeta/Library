let firstName = document.querySelector("#name");
let lastName = document.querySelector("#last-name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signUp = document.querySelector("#signup");

let users = {};

function User(firstName, lastName, email, password) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
}

function createId(users) {
  return Object.keys(users).length;
}

function showError(elem) {
  elem.style.color = "red";
  elem.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  elem.style.borderColor = "red";
}

function resetError(elem) {
  elem.style.color = "";
  elem.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
  elem.style.borderColor = "";
}

signUp.addEventListener("click", (e) => {
  e.preventDefault(); // Предотвращаем отправку формы по умолчанию

  const firstNameUser = firstName.value;
  const lastNameUser = lastName.value;
  const emailUser = email.value;
  const passwordUser = password.value;

  // Ckeck if a user with this email exists in localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || {};
  const userExists = Object.values(existingUsers).some(
    (user) => user.email === emailUser
  );

  if (userExists) {
    showError(email);
    return;
  }

  // Проверка на заполнение полей
  if (!firstNameUser) {
    showError(firstName);
    return;
  }
  if (!lastNameUser) {
    showError(lastName);
    return;
  }
  if (!emailUser || !emailUser.includes('@')) {
    showError(email);
    return;
  }
  if (!passwordUser || passwordUser.length < 8) {
    showError(password);
    return;
  }

  resetError(firstName);
  resetError(lastName);
  resetError(email);
  resetError(password);

  const user = new User(firstNameUser, lastNameUser, emailUser, passwordUser);

  const userId = "User" + createId(users);
  users[userId] = user;

  console.log(users);
  
  // Store user data in localStorage
  localStorage.setItem("users", JSON.stringify({ ...existingUsers, ...users }));
  
  hideModal();
  console.log(`Вы авторизованы! ${users.firstName}`);
});
