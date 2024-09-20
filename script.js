const shareBtn = document.querySelector(".card__share-btn");
const sharePanel = document.querySelector(".card__share-panel");

shareBtn.addEventListener("click", (event) => {
  sharePanel.classList.toggle("card__share-panel--hidden");
});
