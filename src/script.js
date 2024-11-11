const button = document.querySelector("button");
const popup = document.querySelector("#popup_content");
const closeBtn = document.querySelector("#close_button");
const blurred = document.querySelector("#blurred");

button.addEventListener("click", function () {
    popup.classList.toggle("showPopup");
    blurred.style.visibility = "visible";
});

closeBtn.addEventListener("click", function () {
    popup.classList.remove("showPopup");
    blurred.style.visibility = "hidden";
});