
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Navigation menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Parallax effect for hero image
  const heroImage = document.getElementById('hero-image');
  const techImage = document.getElementById('tech-image');
  const expImage = document.getElementById('exp-image');
  
  if (heroImage || techImage || expImage) {
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      if (heroImage) {
        heroImage.style.transform = `scale(${1 + scrollPosition * 0.0005}) translateY(${scrollPosition * 0.05}px)`;
      }
      
      if (techImage && isInViewport(techImage)) {
        const techOffset = getOffsetTop(techImage);
        const techDelta = scrollPosition - techOffset + 500;
        techImage.style.transform = `scale(${1 + techDelta * 0.0002}) translateY(${techDelta * 0.02}px)`;
      }
      
      if (expImage && isInViewport(expImage)) {
        const expOffset = getOffsetTop(expImage);
        const expDelta = scrollPosition - expOffset + 500;
        expImage.style.transform = `scale(${1 + expDelta * 0.0002}) translateY(${expDelta * 0.02}px)`;
      }
    });
  }
  
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal-element');
  
  function handleScrollReveal() {
    revealElements.forEach(element => {
      if (isElementInViewport(element)) {
        const delay = element.dataset.delay || 0;
        setTimeout(() => {
          element.classList.add('active');
        }, delay);
      }
    });
  }
  
  // Initial check on page load
  handleScrollReveal();
  
  // Check on scroll
  window.addEventListener('scroll', handleScrollReveal);
  
  // Helper function to check if element is in viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  }
  
  // Helper function to check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
  }
  
  // Helper function to get element's offset from top
  function getOffsetTop(el) {
    let top = 0;
    while(el) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    return top;
  }
  
  // Add hover animations to buttons
  const buttons = document.querySelectorAll('a.bg-accent, a.bg-primary, a.bg-white');
  buttons.forEach(button => {
    button.classList.add('btn-hover');
  });
  
  // Image hover effects
  const hoverImages = document.querySelectorAll('img:not(#hero-image):not(#tech-image):not(#exp-image)');
  hoverImages.forEach(img => {
    img.classList.add('hover-scale');
  });
});
