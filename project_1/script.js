const panels = document.querySelectorAll(".panel");
var removeActiveClass = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
