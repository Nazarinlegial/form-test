$("select").styler();

let form = document.getElementById("form"),
  sub = document.getElementById("sub"),
  name = document.getElementById("name"),
  phone = document.getElementById("phone"),
  email = document.getElementById("email"),
  area = document.getElementById("area");

console.log(name);
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const subValue = sub.value.trim();
  const nameValue = name.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const areaValue = area.value.trim();

  if (nameValue == "") {
    setErrorFor(name, "Username cannot be blank");
  } else {
    setSuccesFor(name);
  }
}

function setErrorFor(input, message) {
  const formcontrol = inpur.parentElement;
  const small = formcontrol.querySelector("span");

  small.innerText = message;

  formcontrol.classname = "form__label error";
}
