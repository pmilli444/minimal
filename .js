document.querySelectorAll("a[href^='http']").forEach(a => {
  a.setAttribute("target", "_blank");
  a.setAttribute("rel", "noopener noreferrer");
});
