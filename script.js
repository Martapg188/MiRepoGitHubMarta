document.getElementById('botonSaludar').addEventListener('click', function() {
    const nombre = document.getElementById('inputNombre').value;
    const mensaje = document.getElementById('mensaje');
    
    if (nombre) {
        mensaje.textContent = `¡Hola, ${nombre}! Estos archivos están ahora bajo control de versiones.`;
        mensaje.style.color = "green";
    } else {
        mensaje.textContent = "Por favor, escribe un nombre.";
        mensaje.style.color = "red";
    }
});