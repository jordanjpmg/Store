const $searchIcon = document.querySelector(".icon");
const $search = document.querySelector("[type=search]");

$searchIcon.addEventListener("click", () =>
  $search.classList.toggle("-active")
);

$searchIcon.addEventListener("click", () =>
  $searchIcon.classList.toggle("-active")
);
