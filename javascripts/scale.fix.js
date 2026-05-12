var bouton = document.getElementById('retour-haut');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    bouton.style.display = 'block';
  } else {
    bouton.style.display = 'none';
  }
});
