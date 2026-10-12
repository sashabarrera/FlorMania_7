console.log("Conexion correcta...");

/* ==========================================================
   1. CAMBIAR TEXTO AL PASAR EL CURSOR (HOVER)
   ========================================================== */
let enlaceEnvio = document.getElementById('enlaceEnvio');

enlaceEnvio.addEventListener('mouseover', function() {
    enlaceEnvio.textContent = "Envía Bouquets";
});

enlaceEnvio.addEventListener('mouseout', function() {
    enlaceEnvio.textContent = "Envía Flores";
});


/* ==========================================================
   2. ELIMINAR EL BOTÓN COMPRAR AL HACER CLIC (USANDO this)
   ========================================================== */
let botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        this.remove(); // 'this' apunta directamente al botón presionado y lo borra
    });
});


/* ==========================================================
   3. ALERTA AL HACER CLIC EN INICIAR SESIÓN
   ========================================================== */
let iniciarSesionBtn = document.getElementById('iniciarSesionBtn');

iniciarSesionBtn.addEventListener('click', function() {
    alert("Bienvenido a la tienda de flores");
});