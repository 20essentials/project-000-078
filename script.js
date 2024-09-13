console.groupCollapsed("Reference");
console.log(
  "Online tutorial video: https://youtu.be/I1t4LiCji-8?si=ksVfD4K-iKfGKu7b"
);
console.groupEnd();

document.addEventListener("click", (e) => {
  if (e.target.matches(".container-square")) {
    e.target.classList.toggle("rotate-in-x");
  }
});
