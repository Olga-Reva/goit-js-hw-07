const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    [form.elements.email.name]: form.elements.email.value.trim(),
    [form.elements.password.name]: form.elements.password.value.trim(),
  };

  if (!formData.email || !formData.password) {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);
  form.reset();
});
