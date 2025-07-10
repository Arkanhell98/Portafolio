// Esperar a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
  
  // Seleccionamos todos los botones que abren modales
  const buttons = document.querySelectorAll('.openButton');

  // Referencias a los modales específicos
  const modals = {
    modal1: document.querySelector('#modal1'),
    modal2: document.querySelector('#modal2')
  };
  

// Funciones para generar sonido
  const tvSoundOn = new Audio("assets/sounds/tvOn.mp3");
  const tvSoundOff = new Audio("assets/sounds/tvOff.mp3")
  
  tvSoundOn.volume = 0.5
  tvSoundOff.volume = 0.5
  
  function playTvSoundOn() {
    tvSoundOn.currentTime = 0;
    tvSoundOn.play();
  }
  function playTvSoundOff() {
    tvSoundOff.currentTime = 0;
    tvSoundOff.play();
  }


// Función para abrir el modal con animación de encendido
  function openModalWithAnimation(modal) {
  modal.classList.remove("tv-off");
  modal.style.display = 'grid';
  requestAnimationFrame(() => {
    modal.classList.add("tv-on");
  });
  overlay.style.display = 'flex';
  playTvSoundOn();

  }



// Función para cerrar el modal con animación de apagado
function closeModalWithAnimation(modal) {
  modal.classList.remove("tv-on"); // Elimina clase de entrada
  modal.classList.add("tv-off");
  playTvSoundOff();
  
  modal.addEventListener("animationend", function handler() {
    modal.style.display = "none";
    modal.classList.remove("tv-off");
    modal.removeEventListener("animationend", handler);
  });
  overlay.style.display = 'none';
}


  // Íconos de cerrar dentro de los modales
  const closeIcons = document.querySelectorAll('.xIcon');

  // Capa de fondo (overlay) detrás del modal
  const overlay = document.getElementById('overlay');

  // Función para cerrar todos los modales y ocultar el overlay
function closeAllModals(excludeModal = null) {
  Object.values(modals).forEach(modal => {
    if (modal !== excludeModal && modal.style.display !== 'none') {
      closeModalWithAnimation(modal);
    }
  });
  overlay.style.display = 'none';
}

  // Añadir evento a cada botón para abrir el modal correspondiente
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const targetModalId = btn.dataset.modal;
    const targetModal = modals[targetModalId];

    if (targetModal) {
      closeAllModals(targetModal); // 👈 ¡No cierres el que vas a abrir!
      openModalWithAnimation(targetModal);
    }
  });
});
  // Cerrar los modales si se hace clic fuera del modal (en el overlay)
  document.addEventListener('click', function (event) {
    if (overlay.contains(event.target)) {
      closeAllModals();
    }
  });

  // Cerrar el modal al hacer clic en su ícono de cerrar (X)
  closeIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      closeAllModals();
      });
  });

  // Observer para detectar cuando la sección #educacion entra en vista
  const seccionEdu = document.querySelector("#educacion");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        closeAllModals();             // Cierra cualquier modal abierto
        overlay.style.display = 'none'; // Asegura que el overlay se oculte
        tvSoundOff.volume = 0;
      }
    });
  }, {
    threshold: 0.1 // Se activa cuando al menos el 10% de la sección está visible
  });

  // Iniciar observación sobre la sección #educacion
  observer.observe(seccionEdu);
});
