//! Navbar Yönetimi
const header = document.getElementById("header");

// Navbar'daki tüm linkleri seçiyoruz
const aTags = header.querySelectorAll("a");

// Scroll olduğunda header ve linklere "scrolled" class'ı ekleyip çıkarıyoruz
aTags.forEach((navbarList) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      header.classList.add("scrolled");
      navbarList.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
      navbarList.classList.remove("scrolled");
    }
  });
});

//! Active Link Yönetimi
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Sayfa scroll edilince hangi bölümde olduğumuzu kontrol edip
// o bölüme ait navbar linkine "active" class'ı ekliyoruz
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (pageYOffset === 0) {
      link.classList.remove("active");
    } else if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

//! Hakkımda Bölümü - Progress Bar Ayarları
const progressBars = document.querySelectorAll(".progress-bar");
const progressSpans = document.querySelectorAll(".progress-width");

progressBars.forEach((progressBar, index) => {
  const progressSpan = progressSpans[index];
  const progressValue = parseInt(progressSpan.innerHTML);
  const progressBarWidth = progressBar.offsetWidth;

  // Progress bar genişliğini ve span konumunu ayarla
  const progressBarSet = (progressBarWidth * progressValue) / 100;
  progressSpan.style.left = `${progressBarSet - progressSpan.offsetWidth / 2}px`;
  progressBar.style.setProperty("--progress-width", `${progressBarSet}px`);
});

//! İletişim Bölümü - Input ve Textarea Focus Yönetimi
const fields = document.querySelectorAll("input, textarea");

// Aktif alanın class'ını ayarla
fields.forEach((field) => {
  field.addEventListener("focus", () => {
    fields.forEach((f) => f.classList.remove("active"));
    field.classList.add("active");
  });
});

// Sayfada boş bir yere tıklanırsa class'ları kaldır
document.addEventListener("click", (e) => {
  if (!e.target.closest("input") && !e.target.closest("textarea")) {
    fields.forEach((f) => f.classList.remove("active"));
  }
});
