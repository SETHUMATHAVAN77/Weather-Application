const btnEl = document.getElementById("toogler");
const btnIconEl = document.getElementById("toogler-icon");
const containEl = document.getElementById("contain");
const windEl = document.getElementById("wind");

btnEl.onclick = function () {
  if (containEl.getAttribute("data-theme") != "dark") {
    containEl.setAttribute("data-theme", "dark");
    btnIconEl.setAttribute("class", "fa fa-solid fa-sun");
    windEl.setAttribute("style", "color: orange;");
  } else {
    containEl.setAttribute("data-theme", "");
    windEl.setAttribute("style", "color: #0f345fe3;");
    btnIconEl.setAttribute("class", "fas fa-solid fa-moon");
  }
};
