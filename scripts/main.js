// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

/*================= rscroll reveal ============ */
ScrollReveal({ 
  // reset: true, 
  distance: '80px',
  duration: 2000,
  delay: 200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portofolio-box, .contact form', { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right " }
);


  /*================= typed js ============ */

  const typed = new Typed('.multiple-text', { 
    strings: ['Frontend Daveloper', 'Blogger'],
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
    
