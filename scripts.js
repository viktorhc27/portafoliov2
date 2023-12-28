// Agrega un evento de clic al botón
document.getElementById('mostrarMenu').addEventListener('click', function() {
    // Obtiene el elemento del menú
    var miDiv = document.getElementById('miDiv');
    // Alterna la clase 'hidden' para mostrar u ocultar el menú
    miDiv.classList.toggle('hidden');
});