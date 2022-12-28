document.querySelector(".menubtn").addEventListener("click", () => {
  console.log("Hello");
  document.querySelector(".nav-menu").classList.toggle("mostrar");

});


ScrollReveal().reveal('.novedades');
/* 
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

Eso sera util despues cuando se tengan mas cosas
*/
