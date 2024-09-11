(function () {
  pagination(true);
})();

(function () {
  if (!document.body.classList.contains("post-template")) return;

  const cover = document.querySelector(".gh-cover");
  if (!cover) return;

  const image = cover.querySelector(".gh-cover-image");

  const isMobile = window.innerWidth < 768;
  window.addEventListener("load", function () {
    cover.style.setProperty(
      "--cover-height",
      isMobile
        ? "80vh"
        : (image.clientWidth * image.naturalHeight) / image.naturalHeight + "px"
    );
    cover.classList.remove("loading");
  });
})();
