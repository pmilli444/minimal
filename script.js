document.addEventListener('DOMContentLoaded', function() {

  // Bouton retour en haut
  var bouton = document.getElementById('retour-haut');
  if (bouton) {
    function actualiserBouton() {
      bouton.style.display = window.scrollY > 300 ? 'block' : 'none';
    }

    window.addEventListener('scroll', actualiserBouton);
    bouton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    actualiserBouton();
  }

  // Liens externes dans un nouvel onglet
  document.querySelectorAll('a[href^="http"]').forEach(function(lien) {
    lien.setAttribute('target', '_blank');
    lien.setAttribute('rel', 'noopener noreferrer');
  });

});
