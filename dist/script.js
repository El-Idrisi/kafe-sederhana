const hambuger = document.querySelector("#hambuger");
const navbar = document.querySelector("#navbar");

hambuger.addEventListener("click", function () {
    hambuger.classList.toggle("hambuger-active");
    navbar.classList.toggle("translate-x-full");
});
