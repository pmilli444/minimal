var bouton = document.getElementById('retour-haut');
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    bouton.style.display = 'block';
  } else {
    bouton.style.display = 'none';
  }
});

// Ouvre automatiquement tous les liens externes dans un nouvel onglet
document.querySelectorAll('a[href^="http"]').forEach(function(lien) {
  lien.setAttribute('target', '_blank');
  lien.setAttribute('rel', 'noopener noreferrer');
});
