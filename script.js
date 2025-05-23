document.addEventListener("click", (e) => {
  if (e.target.matches(".container-square")) {
    e.target.classList.toggle("rotate-in-x");
  }
});
