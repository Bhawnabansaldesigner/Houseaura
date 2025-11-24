function toggleMore(btn) {
  const dots = btn.parentElement.querySelector(".dots");
  const more = btn.parentElement.querySelector(".more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    btn.innerHTML = "Read more";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    btn.innerHTML = "Read less";
  }
}

const tabs = document.querySelectorAll(".info-tab");
const contents = document.querySelectorAll(".info-tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach((c) => c.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

var swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true, // Enables infinite loop
  autoplay: {
    delay: 2500, // Delay between slides in ms (e.g., 2500 = 2.5s)
    disableOnInteraction: false, // Autoplay won't stop after user interactions
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px (mobile)
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});
