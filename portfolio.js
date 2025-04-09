let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
// FULLPAGE.JS

window.addEventListener('scroll', function() {
            const contentDiv = document.getElementById('content');
            
            // Vérifier la position du scroll
            const scrollPosition = window.scrollY;
            console.log("Scroll position: " + scrollPosition);  // Affiche la position du scroll
            
            // Utiliser une hauteur fixe pour tester la logique
            if (scrollPosition >= 500 && scrollPosition < 1000) {  // Entre 500 et 1000px
                console.log("Deuxième if");
                contentDiv.innerHTML = "Contenu pour le milieu du défilement";
            } else {  // Plus de 1000px défilés
                console.log("Troisième if");
                contentDiv.innerHTML = "Contenu pour la fin du défilement";
            }
        });

// WEB@CADEMIE INFORMATION POPUP 
let wac = document.getElementById('wac')

function popup() {
  wac.style.display = "flex"
}
document.getElementById('close').onclick = function(){
  wac.style.display= "none"
}

