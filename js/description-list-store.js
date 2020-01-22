const $coracao = document.querySelector(".coracao");
const $stars = document.querySelectorAll(".star");

$stars.forEach(function($stars) {
  $stars.addEventListener("click", handleClick);
});

$coracao.addEventListener("click", handleClick);

function handleClick() {
  this.classList.toggle("-active"); //toggle : adiciona e remove
}
