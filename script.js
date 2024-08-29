let btn = document.querySelector("button");
let sharing = document.querySelector(".links");
btn.addEventListener("click", () => {
  btn.classList.toggle("clicked");
  sharing.classList.toggle("displayed");
});
