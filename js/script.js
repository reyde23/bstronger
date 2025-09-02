/*=========================
    PRODUCTO
===========================*/

// FUNCION PARA AGREGAR O DISMIUIR PRODUCTO
    const cantidades = {
        cantidad1: 0,
        cantidad2: 0,
        cantidad3: 0,
        cantidad4: 0,
        cantidad5: 0,
        cantidad6: 0,
        cantidad7: 0,
        cantidad8: 0,
        cantidad9: 0,
        cantidad10: 0,
        cantidad11: 0,
        cantidad12: 0
    };

    function cambiarCantidad(valor, id) {
      cantidades[id] += valor;
      if (cantidades[id] < 0) cantidades[id] = 0;
      document.getElementById(id).textContent = cantidades[id];
    }



/*=========================
    SEDES 
===========================*/

document.querySelectorAll('.carrusel').forEach(carrusel => {
  let index = 0;
  const images = carrusel.querySelectorAll('img');

  setInterval(() => {
    images.forEach(img => img.style.display = 'none');
    images[index].style.display = 'block';
    index = (index + 1) % images.length;
  }, 3000);
});

// Mostrar/Cerrar mapa
function mostrarMapa(url) {
  const overlay = document.getElementById('overlay-mapa');
  const iframe = document.getElementById('iframe-mapa');
  iframe.src = url;
  overlay.style.display = 'flex';
}

function cerrarMapa() {
  const overlay = document.getElementById('overlay-mapa');
  const iframe = document.getElementById('iframe-mapa');
  overlay.style.display = 'none';
  iframe.src = ''; // Limpia el iframe para que no siga reproduciendo
}




/* ========================
   BOTONES ACTIVOS EN EL MENÚ
   ======================== */
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".menu li a");

  function setActive() {
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";
    const currentHash = window.location.hash;

    links.forEach((link) => link.classList.remove("active"));

    let activated = false;

    links.forEach((link) => {
      const href = link.getAttribute("href");

      if (currentPage === "index.html") {
        if (currentHash && href === `index.html${currentHash}`) {
          link.classList.add("active");
          activated = true;
        }

        if (!currentHash && href === "index.html") {
          link.classList.add("active");
          activated = true;
        }
      } else {
        if (href === currentPage) {
          link.classList.add("active");
          activated = true;
        }
      }
    });

    if (!activated) {
      const inicio = document.querySelector('.menu li a[href="index.html"]');
      if (inicio) inicio.classList.add("active");
    }
  }

  setActive();
  window.addEventListener("hashchange", setActive);
});