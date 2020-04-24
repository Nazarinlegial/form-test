$("select").styler();

function validateName() {
  var n = document.forms["formbox"]["name"].value;

  if (n.length < 2 || n.length > 20 || !isNaN(n)) {
    document.getElementById("name").classList.add("error");
    document.getElementById("span__name").classList.remove("hiden");
    return false;
  } else {
    document.getElementById("name").classList.remove("error");
    document.getElementById("span__name").classList.add("hiden");
    return true;
  }
}
function validatePhone() {
  var phone = document.forms["formbox"]["phone"].value;

  if (phone.length < 10) {
    document.getElementById("phone").classList.add("error");
    document.getElementById("span__phone").classList.remove("hiden");
    return false;
  } else {
    document.getElementById("phone").classList.remove("error");
    document.getElementById("span__phone").classList.add("hiden");
    return true;
  }
}
function validateEmail() {
  var x = document.forms["formbox"]["email"].value;

  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    document.getElementById("email").classList.add("error");
    document.getElementById("span__mail").classList.remove("hiden");
    return false;
  } else {
    document.getElementById("email").classList.remove("error");
    document.getElementById("span__mail").classList.add("hiden");
    return true;
  }
}
function validateMessage() {
  var message = document.forms["formbox"]["area"].value;

  if (message.length < 5) {
    document.getElementById("area").classList.add("error");
    document.getElementById("span__message").classList.remove("hiden");
    return false;
  } else {
    document.getElementById("area").classList.remove("error");
    document.getElementById("span__message").classList.add("hiden");
    return true;
  }
}
document.getElementById("send__btn").onclick = function () {
  document.forms.my.reset();
  location.reload();
};
function checkall() {
  if ((validateEmail(), validateName(), validateMessage(), validatePhone())) {
    document.getElementById("send__message").classList.remove("hiden");
    return false;
  } else {
    return false;
  }
}

$(".jq-selectbox__select").on("click", function () {
  $(".line").slideToggle();
});
