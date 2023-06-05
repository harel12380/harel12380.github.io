const checkbox = document.getElementById("hidden-checkbox");
const label = document.querySelector("label");
const paragraph = document.querySelector("p");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    paragraph.classList.add("covered");
  } else {
    paragraph.classList.remove("covered");
  }
});
