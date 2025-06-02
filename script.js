function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show-menu');
}

// Cerrar menú si se clickea fuera
document.addEventListener('click', function(event) {
  const menu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.menu-icon');

  if (
    menu.classList.contains('show-menu') && // menú abierto
    !menu.contains(event.target) &&          // clic NO dentro del menú
    !menuIcon.contains(event.target)         // clic NO en el icono del menú
  ) {
    menu.classList.remove('show-menu');      // cerrar menú
  }
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.getElementById('questionsForm').addEventListener('submit', function (e) {
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nom || !email || !message) {
    e.preventDefault();
    alert("Veuillez remplir tous les champs.");
  } else if (!emailRegex.test(email)) {
    e.preventDefault();
    alert("Veuillez entrer une adresse e-mail valide.");
  }
});


