let form = document.getElementsByClassName("form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let { name, email, password } = form.elements;
  let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.value.trim()) {
    alert("Name is required!");
    return;
  }

  if (!email.value.trim()) {
    alert("Email is required!");
    return;
  }

  if (!pattern.test(email.value)) {
    alert("Email is invalid!");
    return;
  }

  if (!password.value.trim()) {
    alert("Password is required!");
    return;
  }

  if (password.value.length < 8) {
    alert("Password must be 8 characters long!");
    return;
  }

  form.submit();
});
