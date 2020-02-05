const $searchIcon = document.querySelector(".icon-search");
const $search = document.querySelector(".input-search");

$searchIcon.addEventListener("click", () =>
  $search.classList.toggle("-active")
);

$searchIcon.addEventListener("click", () =>
  $searchIcon.classList.toggle("-active")
);
