var link = document.querySelector(".btn_address");
var popup = document.querySelector(".modal_content");
var close = popup.querySelector(".modal_content_close");
var form = popup.querySelector(".modal_content_form");
var login = popup.querySelector(".js_login_field");
var email = popup.querySelector(".js_email_field");
var area = popup.querySelector("textarea");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal_content_show");
    if (storage) {
          login.value = storage;
          email.focus();
        } else {
          login.focus();
        }
});

close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal_content_show");
        popup.classList.remove("modal_error");
});

form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !area.value) {
      event.preventDefault();
      popup.classList.remove("modal_error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal_error");
        } else {
            localStorage.setItem("login", login.value);
        }
});

window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal_content_show")) {
            popup.classList.remove("modal_content_show");
            popup.classList.remove("modal_error");
          }
        }
});
