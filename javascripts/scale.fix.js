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

<script>function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"91069bf54ae6cc25a441b04be108de2c"})});</script>

/* --- Ouverture des liens dans un nouvel onglet --- */

document.addEventListener("DOMContentLoaded", function () {
  var links = document.getElementsByTagName("a");
  for (var j = 0; j < links.length; j++) {
    links[j].setAttribute("target", "_blank");
    links[j].setAttribute("rel", "noopener noreferrer");
  }
});
