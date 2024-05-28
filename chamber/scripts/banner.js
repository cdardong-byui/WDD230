const anuncio = document.querySelector("#anuncio");
anuncio.innerHTML = `We invite all visitors and users to attend the chamber of commerce meeting on Wednesday at 7:00 p.m. m.❗`;

function isBannerDay() {
    const today = new Date().getDay();
    return [1, 2, 5].includes(today);
  }
  
  function closeBanner() {
    const banner = document.getElementById("announcementBanner");
    banner.style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    if (isBannerDay()) {
      const banner = document.getElementById("announcementBanner");
      banner.style.display = "flex";
    }
  });