/**
 * Navegación principal de CCR
 * Controla el menú móvil y el fondo de la barra al desplazarse.
 */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  const bar1 = document.getElementById("bar1");
  const bar2 = document.getElementById("bar2");
  const bar3 = document.getElementById("bar3");

  if (!navbar || !menuBtn || !mobileMenu) {
    return;
  }

  let menuOpen = false;

  function updateNavbar() {
    if (window.scrollY > 40 || menuOpen) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  }

  function openMenu() {
    menuOpen = true;

    menuBtn.setAttribute("aria-expanded", "true");
    menuBtn.setAttribute("aria-label", "Cerrar menú");

    mobileMenu.classList.remove("mobile-menu-closed");
    mobileMenu.classList.add("mobile-menu-open");

    if (bar1) {
      bar1.style.transform = "rotate(45deg) translate(5px, 6px)";
    }

    if (bar2) {
      bar2.style.opacity = "0";
    }

    if (bar3) {
      bar3.style.transform = "rotate(-45deg) translate(5px, -6px)";
    }

    updateNavbar();
  }

  function closeMenu() {
    menuOpen = false;

    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");

    mobileMenu.classList.remove("mobile-menu-open");
    mobileMenu.classList.add("mobile-menu-closed");

    if (bar1) {
      bar1.style.transform = "rotate(0deg) translate(0, 0)";
    }

    if (bar2) {
      bar2.style.opacity = "1";
    }

    if (bar3) {
      bar3.style.transform = "rotate(0deg) translate(0, 0)";
    }

    updateNavbar();
  }

  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuBtn.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", updateNavbar, {
    passive: true
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && menuOpen) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      menuBtn.focus();
    }
  });

  updateNavbar();
});
