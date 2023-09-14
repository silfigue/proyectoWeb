function mostrarPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'block';
}

function ocultarPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = 'none';
}

//para mostrar el popup cuando se haga clic en una provincia del mapa
const provincias = document.getElementsByClassName('province');
for (let i = 0; i < provincias.length; i++) {
  provincias[i].addEventListener('click', function() {
    const popupId = 'popup' + (i + 1); // Asigna un ID único para cada popup
    mostrarPopup(popupId);
  });
}

//para cerrar el popup cuando se haga clic en la cruz de cerrar
const cerrarPopups = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarPopups.length; i++) {
  cerrarPopups[i].addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento se propague al área de la provincia
    const popupId = cerrarPopups[i].parentNode.id; // Obtiene el ID del popup
    ocultarPopup(popupId);
  });
}

//para cerrar el popup cuando se haga clic fuera de él
window.addEventListener('click', function(event) {
  const popups = document.getElementsByClassName('popup');
  for (let i = 0; i < popups.length; i++) {
    if (event.target === popups[i]) {
      ocultarPopup(popups[i].id);
    }
  }
});

//para cerrar el popup cuando se haga clic en la cruz de cerrar
const cerrarPopup = document.getElementsByClassName('cerrar')[0];
cerrarPopup.addEventListener('click', ocultarPopup);