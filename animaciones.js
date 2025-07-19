document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS con mirror activo
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: false,     // ❗ false para que se repita cada vez
        mirror: true,    // ❗ true para que funcione al subir
        offset: 120
      });
    }
  
    // Animaciones en botones
    document.querySelectorAll('.explore-button, .contact-btn, .submit-btn').forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transition = 'all 0.3s ease';
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 10px 20px rgba(212, 188, 125, 0.3)';
      });
  
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = 'none';
      });
  
      button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
      });
  
      button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1)';
      });
    });
  
    // Iconos sociales
    document.querySelectorAll('.social-icons a').forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transition = 'all 0.3s ease';
        icon.style.transform = 'translateY(-5px) rotate(5deg)';
      });
  
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'translateY(0) rotate(0)';
      });
    });
  
    // Navbar sticky
    const navbar = document.querySelector('header');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
          navbar.style.transition = 'all 0.4s ease';
          navbar.style.backgroundColor = 'rgba(14, 34, 23, 0.9)';
          navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
          navbar.style.backgroundColor = 'transparent';
          navbar.style.boxShadow = 'none';
        }
      });
    }
  
    // Logo animado
    const logoText = document.querySelector('.logo h1');
    if (logoText) {
      logoText.style.opacity = '0';
      logoText.style.transform = 'translateY(20px)';
  
      setTimeout(() => {
        logoText.style.transition = 'all 1s ease';
        logoText.style.opacity = '1';
        logoText.style.transform = 'translateY(0)';
      }, 500);
    }
  
    // Carrusel zoom
    document.querySelectorAll('.slide').forEach(slide => {
      slide.addEventListener('transitionend', () => {
        const isActive = slide.classList.contains('active');
        slide.style.transition = 'transform 7s ease';
        slide.style.transform = isActive ? 'scale(1.1)' : 'scale(1)';
      });
    });
  
    // Slide activo inicial
    document.querySelectorAll('.slide.active').forEach(slide => {
      setTimeout(() => {
        slide.style.transition = 'transform 7s ease';
        slide.style.transform = 'scale(1.1)';
      }, 500);
    });
  
    // Refrescar AOS en resize
    window.addEventListener('resize', () => {
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    });
  });
  