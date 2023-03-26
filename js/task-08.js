// select login form
const loginForm = document.querySelector('.login-form');

// add submit listener
loginForm.addEventListener('submit', onInputSubmit);

// function that checks input and send login data to an object.
function onInputSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    return alert('All fields must be filled in!!!');
  }

  const loginData = { email: email.value, password: password.value };

  console.log(loginData);
  event.currentTarget.reset();
}
