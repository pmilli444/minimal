var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i = 0; i < metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i = 0; i < metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

/* --- Ouverture des liens externes dans un nouvel onglet --- */
document.addEventListener("DOMContentLoaded", function () {
  var links = document.getElementsByTagName("a");
  for (var j = 0; j < links.length; j++) {
    var href = links[j].getAttribute("href");
    // On exclut les ancres internes et les liens du menu
    if (href && !href.startsWith("#") && !href.startsWith("/")) {
      links[j].setAttribute("target", "_blank");
      links[j].setAttribute("rel", "noopener noreferrer");
    }
  }
});

/* --- Défilement fluide pour les ancres internes --- */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('nav a[href^="#"]').forEach(function(lien) {
    lien.addEventListener('click', function(e) {
      e.preventDefault();
      var cible = document.querySelector(this.getAttribute('href'));
      if (cible) {
        cible.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* --- Bouton retour en haut --- */
  var bouton = document.getElementById('retour-haut');
  if (bouton) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        bouton.style.display = 'block';
      } else {
        bouton.style.display = 'none';
      }
    });
  }
});
