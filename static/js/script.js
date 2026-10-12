console.log("Conexion correcta...");

// Seleccionamos el enlace del menú por su ID
let enlaceEnvio = document.getElementById('enlaceEnvio');

// Cambia el texto al pasar el cursor encima
enlaceEnvio.addEventListener('mouseover', function() {
    enlaceEnvio.textContent = "Envía Bosques";
});

// Regresa al texto original al retirar el cursor
enlaceEnvio.addEventListener('mouseout', function() {
    enlaceEnvio.textContent = "Envía Flores";
});