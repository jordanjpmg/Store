const $coracao = window.document.querySelector(".coracao");

$coracao.addEventListener("click", handleClick);

function handleClick() {
  /*if ($coracao.classList.contains("-active")) {
    $coracao.classList.remove("-active");
  } else {
    $coracao.classList.add("-active");
  }*/

  $coracao.classList.toggle("-active");
}
