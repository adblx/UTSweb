// Animasi skill bar tanpa jQuery
document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".skills-prog li");

  skillItems.forEach(function (item, index) {
    const percent = item.getAttribute("data-percent");
    const bar = item.querySelector(".bar");

    if (bar) {
      setTimeout(function () {
        bar.style.width = percent + "%";
      }, index * 150);
    }
  });
});
