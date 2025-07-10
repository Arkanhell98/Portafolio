  
  const clickSound = new Audio('assets/sounds/selectSound.mp3');

  const swiper = new Swiper(".mySwiper", {
       loop:true,
       cssMode: true,
       navigation: {
           nextEl: ".swiper-button-next",
           prevEl: ".swiper-button-prev",
       },
       mousewheel: true,
       keyboard: true,
   });

 
  document.querySelector('.swiper-button-next').addEventListener('click', () => {
    clickSound.currentTime = 0; 
    clickSound.play();
  });

  document.querySelector('.swiper-button-prev').addEventListener('click', () => {
    clickSound.currentTime = 0;
    clickSound.play();
  });
  
