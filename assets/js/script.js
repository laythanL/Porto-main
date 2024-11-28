const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
});


//Lenis
document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();

  // lenis.on('scroll', (e) => {
  //   console.log(e);
  // });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
